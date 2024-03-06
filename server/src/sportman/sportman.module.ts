import { Module } from '@nestjs/common';
import { SportmanService } from './sportman.service';
import { SportmanController } from './sportman.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportmanEntity } from './entities/sportman.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      SportmanEntity,
      ClubEntity,
      MatchEntity,
      PositionEntity,
      SkillEntity,
      SportEntity
    ])
  ],
  exports: [],
  controllers: [SportmanController],
  providers: [SportmanService, UserService]
})
export class SportmanModule {}
