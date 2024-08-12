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
import { ImgManagerService } from 'src/img-manager/img-manager.service';
import { SendMailService } from 'src/send-mail/send-mail.service';

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
  exports: [SportmanService, TypeOrmModule.forFeature([SportmanEntity])],
  controllers: [SportmanController],
  providers: [SportmanService, UserService, ImgManagerService, SendMailService]
})
export class SportmanModule {}
