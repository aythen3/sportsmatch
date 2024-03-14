import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserModule } from './user/user.module';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { SendMailModule } from './send-mail/send-mail.module';
import { NotificationModule } from './notification/notification.module';
import { ClubModule } from './club/club.module';
import { SportmanModule } from './sportman/sportman.module';
import { SportModule } from './sport/sport.module';
import { OfferModule } from './offer/offer.module';
import { SkillModule } from './skill/skill.module';
import { PositionModule } from './position/position.module';
import { MatchModule } from './match/match.module';
import { ImgManagerModule } from './img-manager/img-manager.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(DataSourceConfig),
    UserModule,
    AuthJwtModule,
    SendMailModule,
    NotificationModule,
    ClubModule,
    SportmanModule,
    SportModule,
    OfferModule,
    SkillModule,
    PositionModule,
    MatchModule,
    ImgManagerModule,
    PostModule,
    CommentModule,
    LikeModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
