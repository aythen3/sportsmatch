import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { OfferEntity } from './entities/offer.entity';
import { MatchService } from 'src/match/match.service';
import { ClubService } from 'src/club/club.service';
import { UserService } from 'src/user/user.service';
import { SportmanService } from 'src/sportman/sportman.service';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationEntity } from 'src/notification/entities/notification.entity';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { PostEntity } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ChatModule } from 'src/chat/chat.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OfferEntity,
      ClubEntity,
      MatchEntity,
      SportmanEntity,
      UserEntity,
      NotificationEntity,
      PostEntity
    ]),
    ChatModule,
    NotificationModule
  ],
  exports: [OfferService, TypeOrmModule.forFeature([OfferEntity])],
  controllers: [OfferController],
  providers: [
    OfferService,
    MatchService,
    ClubService,
    UserService,
    SportmanService,
    NotificationService,
    SendMailService,
    PostService
  ]
})
export class OfferModule {}
