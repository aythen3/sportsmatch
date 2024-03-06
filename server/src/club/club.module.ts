import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from './entities/club.entity';
<<<<<<< Updated upstream
=======
import { UserService } from 'src/user/user.service';
>>>>>>> Stashed changes

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ClubEntity,
      OfferEntity,
      PositionEntity,
      SportmanEntity
    ])
  ],
  exports: [],
  controllers: [ClubController],
<<<<<<< Updated upstream
  providers: [ClubService]
=======
  providers: [ClubService, UserService]
>>>>>>> Stashed changes
})
export class ClubModule {}
