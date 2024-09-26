import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ClubEntity } from './entities/club.entity';
import { UserService } from 'src/user/user.service';
import { ImgManagerService } from 'src/img-manager/img-manager.service';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { SportService } from 'src/sport/sport.service';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { PostEntity } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ClubEntity,
      OfferEntity,
      PositionEntity,
      SportmanEntity,
      SportEntity,
      PostEntity
    ])
  ],
  exports: [ClubService],
  controllers: [ClubController],
  providers: [
    ClubService,
    UserService,
    ImgManagerService,
    SportService,
    SendMailService,
    PostService
  ]
})
export class ClubModule {}
