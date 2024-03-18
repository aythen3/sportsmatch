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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PostEntity,
      CommentEntity,
      LikeEntity
    ])
  ],
  controllers: [CommentController],
  providers: [CommentService, PostService, UserService]
})
export class CommentModule {}
