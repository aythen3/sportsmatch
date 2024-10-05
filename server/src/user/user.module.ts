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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ClubEntity,
      PostEntity,
      CommentEntity,
      LikeEntity
    ])
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
    PostService
  ]
})
export class UserModule {}
