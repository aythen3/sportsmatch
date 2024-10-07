import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { CommentEntity } from './entities/comment.entity';
import { LikeEntity } from 'src/like/entities/like.entity';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PostEntity,
      CommentEntity,
      LikeEntity
    ]),
    NotificationModule
  ],
  controllers: [CommentController],
  providers: [CommentService, PostService, UserService, SendMailService]
})
export class CommentModule {}
