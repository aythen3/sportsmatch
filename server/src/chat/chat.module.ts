import { forwardRef, Module } from '@nestjs/common';

import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './entities/message.entity';

import { ChatController } from './chat.controller';
import { ChatService } from './service/chat.service';
import { MessageService } from './service/message.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { ChatEntity } from './entities/chat.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { PostModule } from 'src/post/post.module';
import { NotificationModule } from 'src/notification/notification.module';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationEntity } from 'src/notification/entities/notification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MessageEntity,
      UserEntity,
      ChatEntity,
      PostEntity,
      NotificationEntity
    ]),
    PostModule
  ],
  exports: [
    TypeOrmModule.forFeature([MessageEntity, ChatEntity]),
    ChatGateway,
    MessageService
  ],
  controllers: [ChatController],
  providers: [
    ChatGateway,
    ChatService,
    MessageService,
    UserService,
    NotificationService
  ]
})
export class ChatModule {}
