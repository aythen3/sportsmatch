import { Module } from '@nestjs/common';
import { UserModule } from './../user/user.module';
import { AuthJwtModule } from './../auth-jwt/auth-jwt.module';
import { SendMailModule } from './../send-mail/send-mail.module';
import { NotificationModule } from './../notification/notification.module';
import { ClubModule } from './../club/club.module';
import { SportmanModule } from './../sportman/sportman.module';
import { SportModule } from './../sport/sport.module';
import { OfferModule } from './../offer/offer.module';
import { SkillModule } from './../skill/skill.module';
import { PositionModule } from './../position/position.module';
import { MatchModule } from './../match/match.module';
import { ImgManagerModule } from './../img-manager/img-manager.module';
import { PostModule } from './../post/post.module';
import { CommentModule } from './../comment/comment.module';
import { LikeModule } from './../like/like.module';
import { ChatModule } from './../chat/chat.module';
import { StripeModule } from './../stripe/stripe.module';
import { Auth0Module } from './../auth0/auth0.module';
import { InfoEntityService } from './info-entity.service';
import { InfoEntityController } from './info-entity.controller';

@Module({
  imports: [
    UserModule,
    AuthJwtModule,
    SendMailModule,
    NotificationModule, // Agrega NotificationModule aquí
    InfoEntityModule,
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
    LikeModule,
    ChatModule,
    StripeModule,
    Auth0Module,
  ],
  exports: [InfoEntityService],
  controllers: [InfoEntityController],
  providers:[InfoEntityService],
})
export class InfoEntityModule {}

