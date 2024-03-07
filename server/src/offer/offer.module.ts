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
      UserEntity
    ])
  ],
  controllers: [OfferController],
  providers: [OfferService]
})
export class OfferModule {}
