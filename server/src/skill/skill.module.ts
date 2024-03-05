import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from './entities/skill.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}
