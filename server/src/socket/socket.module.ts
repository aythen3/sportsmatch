import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { SocketGateway } from './socket.gateway';

@Module({
  controllers: [],
  providers: [SocketGateway, SocketService]
})
export class SocketModule {}
