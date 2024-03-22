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

  private connectedUsers: number = 0;
  // eslint-disable-next-line
  afterInit(server: any) {
    console.log('inicio');
  }
  // eslint-disable-next-line
  handleConnection(client: Socket) {
    this.connectedUsers++;
    this.server.emit('users online', this.connectedUsers);
    console.log('users online', this.connectedUsers);
    console.log('Cliente conectado:', client.handshake.headers.userid);
  }

  handleDisconnect(client: Socket) {
    this.connectedUsers--;
    this.server.emit('users online', this.connectedUsers);
    console.log('users online', this.connectedUsers);
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('message')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { sender: string; receiver: string; message: string }
  ): Promise<any> {
    const room = this.chatService.roomIdGenerator(data.sender, data.receiver);
    await this.messageService.saveMessage(
      data.sender,
      data.receiver,
      room,
      data.message
    );
    this.server.to(room).emit('message-server', data);
    console.log('message', room);
    return data;
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, data: { sender: string; receiver: string }) {
    const room = this.chatService.roomIdGenerator(data.sender, data.receiver);
    client.join(room);
    client.emit('joinedRoom', room);
    console.log('joinedRoom', room);
  }

  @SubscribeMessage('leaveRoom')
  handleRoomLeave(client: Socket, data: { sender: string; receiver: string }) {
    const room = this.chatService.roomIdGenerator(data.sender, data.receiver);
    client.join(room);
    client.emit('joinedRoom', room);
    console.log('joinedRoom', room);
  }
}
