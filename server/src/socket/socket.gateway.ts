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

@WebSocketGateway(3010)
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
  handleConnection(client: Socket) {
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
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any
  ): void {
    client.broadcast.emit(
      'message-server',
      ` message: ${data.message} , id: ${client.id}`
    );
    console.log('message', data.message);
    return data;
  }
}
