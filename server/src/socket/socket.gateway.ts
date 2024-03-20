import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  MessageBody
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(81)
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private connectedUsers: number = 0;
  // eslint-disable-next-line
  afterInit(server: any) {
    console.log('inicio');
  }
  // eslint-disable-next-line
  handleConnection(client: Socket, ...args: any[]) {
    this.connectedUsers++;
    this.server.emit('users online', this.connectedUsers);
    console.log('users online', this.connectedUsers);
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.connectedUsers--;
    this.server.emit('users online', this.connectedUsers);
    console.log('users online', this.connectedUsers);
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
