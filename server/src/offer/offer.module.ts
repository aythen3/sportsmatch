import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { OfferEntity } from './entities/offer.entity';
import { PositionService } from 'src/position/position.service';
import { MatchService } from 'src/match/match.service';
import { ClubService } from 'src/club/club.service';
import { UserService } from 'src/user/user.service';
import { SportService } from 'src/sport/sport.service';
import { SportmanService } from 'src/sportman/sportman.service';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationEntity } from 'src/notification/entities/notification.entity';
import { SendMailService } from 'src/send-mail/send-mail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OfferEntity,
      SportmanEntity,
      ClubEntity,
      MatchEntity,
      PositionEntity,
      SkillEntity,
      SportEntity,
      UserEntity,
      NotificationEntity,
    ])
  ],
  exports: [OfferService,  TypeOrmModule.forFeature([OfferEntity])],
  controllers: [OfferController],
  providers: [
    OfferService,
    MatchService,
    ClubService,
    UserService,
    SportService,
    SportmanService,
    NotificationService,
    SendMailService
  ]
})
export class OfferModule {}
