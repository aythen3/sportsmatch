import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtService } from 'src/auth-jwt/auth-jwt.service';
import { ClubEntity } from 'src/club/entities/club.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { LikeEntity } from 'src/like/entities/like.entity';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { PostService } from 'src/post/post.service';
import { ChatModule } from 'src/chat/chat.module';
import { NotificationModule } from 'src/notification/notification.module';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationEntity } from 'src/notification/entities/notification.entity';
import { ChatGateway } from 'src/chat/chat.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ClubEntity,
      PostEntity,
      CommentEntity,
      LikeEntity,
      NotificationEntity
    ]),
    ChatModule
  ],
  exports: [
    UserService,
    TypeOrmModule.forFeature([UserEntity]) // Exporta TypeOrmModule.forFeature con UserEntity
  ],
  controllers: [UserController],
  providers: [
    UserService,
    JwtService,
    AuthJwtService,
    SendMailService,
    PostService,
    NotificationService
  ]
})
export class UserModule {}
