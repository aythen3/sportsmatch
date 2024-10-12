import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { MessageService } from './service/message.service';
import { ChatService } from './service/chat.service';

@WebSocketGateway(3010)
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private messageService: MessageService,
    private chatService: ChatService
  ) {}

  @WebSocketServer()
  server: Server;

  private connectedUsers: Map<string, string> = new Map();

  // eslint-disable-next-line
  afterInit(server: any) {
    console.log('inicio');
  }
  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId;
    if (userId) {
      this.connectedUsers.set(userId.toLocaleString(), client.id);
      // client.join(userId); // Unir al usuario a su sala personal para notificaciones generales
      console.log(`Usuario conectado: ${userId}`);
      console.log('userssss', this.connectedUsers);
    }
  }

  handleDisconnect(client: Socket) {
    const userId = Array.from(this.connectedUsers.keys()).find(
      (key) => this.connectedUsers.get(key) === client.id
    );
    if (userId) {
      this.connectedUsers.delete(userId);
      console.log(`Usuario ${userId} desconectado`);
    }
  }

  @SubscribeMessage('message')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    data: {
      sender: string;
      receiver: string;
      message: string;
    }
  ): Promise<any> {
    // Si es un mensaje entre usuarios (chat directo)
    let chat = await this.chatService.findChatBetweenUsers(
      data.sender,
      data.receiver
    );

    if (!chat) {
      chat = await this.chatService.createChat(data.sender, data.receiver);
    }

    // Guardar el mensaje relacionado al chat
    const newMessage = await this.messageService.saveMessage(
      data.sender,
      data.receiver,
      chat.id, // Usa el ID del chat como "room"
      data.message,
      chat
    );

    console.log('emitiendo mensaje a ', chat.id);
    client.emit('message-server', newMessage); // Emitir al remitente
    client.to(chat.id).emit('message-server', newMessage); // Emitir solo una vez a la sala
    // client.emit('message-server', newMessage);
    return newMessage;
  }

  @SubscribeMessage('markAsRead')
  async handleMarkAsRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { messageId: string; userId: string }
  ) {
    // Busca el mensaje por su ID
    const message = await this.messageService.findMessageById(data.messageId);

    // Verifica que el mensaje existe y que el usuario es el receptor
    if (!message || message.receiverId !== data.userId) {
      throw new Error('Mensaje no encontrado o usuario no autorizado');
    }

    // Marca el mensaje como leído
    message.isReaded = true;
    await this.messageService.updateMessage(message); // Método para actualizar el mensaje en la DB

    // Emitir un evento a todos los clientes en la sala para que actualicen la interfaz
    client.to(message.room).emit('messageRead', { messageId: message.id });

    console.log(`Mensaje ${message.id} marcado como leído por ${data.userId}`);
    return { success: true };
  }

  @SubscribeMessage('markMessagesAsRead')
  async handleMarkMessagesAsRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { chatId: string; userId: string }
  ) {
    // Busca los mensajes en el chat que aún no han sido leídos por el usuario
    const messages = await this.messageService.findUnreadMessages(data.userId);

    if (!messages.length) {
      // No hay mensajes no leídos
      return;
    }

    // Marca todos los mensajes como leídos
    for (const message of messages) {
      message.isReaded = true;
      await this.messageService.updateMessage(message);
    }

    // Emitir un evento a todos los clientes en la sala para que actualicen la interfaz
    client.to(data.chatId).emit(
      'messagesMarkedAsRead',
      messages.map((m) => m.id)
    );

    console.log(
      `Mensajes marcados como leídos en el chat ${data.chatId} por ${data.userId}`
    );
  }

  @SubscribeMessage('joinGroup')
  async handleGroupJoin(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { room: string }
  ) {
    const { room } = data;
    client.join(room);
    client.emit('joinedGroup', room);
    console.log('Client joined group:', room);
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, data: { sender: string; receiver: string }) {
    const room = this.chatService.roomIdGenerator(data.sender, data.receiver);
    client.join(room);
    client.emit('joinedRoom', room);
    console.log('joinedRoom', room);
  }

  @SubscribeMessage('leaveRoom')
  handleRoomLeave(client: Socket, data: { room: string }) {
    console.log('leaveRoom', data, client);
    client.leave(data.room);
    client.emit('leaveRoom', data.room);
  }
  @SubscribeMessage('emitToUser')
  emitToUser(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { usuarioId: string; evento: string; data: any }
  ) {
    this.server.to(data.usuarioId).emit(data.evento, data.data);
  }

  sendNotificationToUser(userId: string, event: string, data: any) {
    const socketId = this.connectedUsers.get(userId);
    if (socketId) {
      this.server.to(socketId).emit(event, data);
    }
  }
}
