import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from './entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SportmanEntity,
      ClubEntity,
      MatchEntity,
      PositionEntity,
      SkillEntity,
      SportEntity
    ])
  ],
  controllers: [PositionController],
  providers: [PositionService]
})
export class PositionModule {}
