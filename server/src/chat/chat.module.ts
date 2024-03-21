import { Module } from '@nestjs/common';
import { ChatService } from './service/chat.service';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './entities/message.entity';
import { MessageService } from './service/message.service';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  controllers: [],
  providers: [ChatGateway, ChatService, MessageService]
})
export class ChatModule {}
