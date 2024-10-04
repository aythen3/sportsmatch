import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from './entities/match.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { UserEntity } from 'src/user/entities/user.entity';

import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportmanService } from '../sportman/sportman.service';
import { UserService } from 'src/user/user.service';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationEntity } from 'src/notification/entities/notification.entity';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { PostEntity } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SportmanEntity,
      ClubEntity,
      MatchEntity,

      SportEntity,
      UserEntity,
      OfferEntity,
      NotificationEntity,
      PostEntity
    ])
  ],
  controllers: [MatchController],
  providers: [
    MatchService,
    SportmanService,
    UserService,
    NotificationService,
    SendMailService,
    PostService
  ]
})
export class MatchModule {}
