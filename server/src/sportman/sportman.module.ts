import { Module } from '@nestjs/common';
import { SportmanService } from './sportman.service';
import { SportmanController } from './sportman.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportmanEntity } from './entities/sportman.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { ImgManagerService } from 'src/img-manager/img-manager.service';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { PostService } from 'src/post/post.service';
import { PostEntity } from 'src/post/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      SportmanEntity,
      ClubEntity,
      MatchEntity,

      PostEntity
    ])
  ],
  exports: [SportmanService, TypeOrmModule.forFeature([SportmanEntity])],
  controllers: [SportmanController],
  providers: [
    SportmanService,
    UserService,
    ImgManagerService,
    SendMailService,
    PostService
  ]
})
export class SportmanModule {}
