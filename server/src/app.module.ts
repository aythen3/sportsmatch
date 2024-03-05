import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserModule } from './user/user.module';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { SendMailModule } from './send-mail/send-mail.module';
import { NotificationModule } from './notification/notification.module';
import { ClubModule } from './club/club.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(DataSourceConfig),
    UserModule,
    AuthJwtModule,
    SendMailModule,
    NotificationModule,
    ClubModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
