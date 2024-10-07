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
  // eslint-disable-next-line
  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId;
    if (userId) {
      this.connectedUsers.set(userId.toLocaleString(), client.id);
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

    // Asegurarse de que el cliente esté en la sala adecuada (chat.id)
    if (!client.rooms.has(chat.id)) {
      client.join(chat.id);
    }
    if (!client.rooms.has(data.receiver)) {
      client.join(data.receiver);
    }
    console.log('enviando a ', chat.id, newMessage, chat);
    // Emitir el mensaje solo al receptor
    client.to(chat.id).emit('message-server', newMessage); // Emitir solo una vez a la sala
    // client.to(data.receiver).emit('chat', {
    //   messages: [...chat.messages, newMessage],
    //   chat: chat.id
    // }); // Emitir solo una vez a la sala

    return newMessage;
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
    client.leave(data.room);
    client.emit('leaveRoom', data.room);
    console.log('leaveRoom', data.room);
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
