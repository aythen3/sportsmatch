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

import { MatchModule } from './match/match.module';
import { ImgManagerModule } from './img-manager/img-manager.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ChatModule } from './chat/chat.module';
import { StripeModule } from './stripe/stripe.module';
import { Auth0Module } from './auth0/auth0.module';
import { InfoEntityModule } from './info-entity/info-entity.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
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
    MatchModule,
    ImgManagerModule,
    PostModule,
    CommentModule,
    LikeModule,
    ChatModule,
    StripeModule,
    Auth0Module,
    InfoEntityModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot: '/assets', // Sirve la carpeta assets en /assets
      renderPath: '' // Desactiva la búsqueda de un archivo HTML por defecto // Carpeta que contiene los archivos estáticos
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
