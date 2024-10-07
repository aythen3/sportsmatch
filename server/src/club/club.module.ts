import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from './entities/club.entity';
import { UserService } from 'src/user/user.service';
import { ImgManagerService } from 'src/img-manager/img-manager.service';

import { SendMailService } from 'src/send-mail/send-mail.service';
import { PostEntity } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ClubEntity,
      OfferEntity,
      SportmanEntity,
      PostEntity
    ]),
    NotificationModule
  ],
  exports: [ClubService],
  controllers: [ClubController],
  providers: [
    ClubService,
    UserService,
    ImgManagerService,
    SendMailService,
    PostService
  ]
})
export class ClubModule {}
