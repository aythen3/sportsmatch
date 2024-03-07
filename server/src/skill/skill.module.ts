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
import { SportmanService } from 'src/sportman/sportman.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SportmanEntity,
      ClubEntity,
      MatchEntity,
      PositionEntity,
      SkillEntity,
      SportEntity,
      UserEntity
    ])
  ],
  controllers: [SkillController],
  providers: [SkillService, SportmanService, UserService]
})
export class SkillModule {}
