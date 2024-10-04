import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportController } from './sport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { SportEntity } from './entities/sport.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SportmanEntity,
      ClubEntity,
      MatchEntity,
      SportEntity
    ])
  ],
  exports: [SportService],
  controllers: [SportController],
  providers: [SportService]
})
export class SportModule {}
