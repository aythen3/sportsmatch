import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { PostEntity } from './entities/post.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { LikeEntity } from 'src/like/entities/like.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PostEntity,
      CommentEntity,
      LikeEntity
    ])
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService]
})
export class PostModule {}
