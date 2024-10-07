import { Module } from '@nestjs/common';
import { SendMailService } from './send-mail.service';
import { SendMailController } from './send-mail.controller';
import { ResetCodeController } from './reset-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { ResetCodeEntity } from './entities/reset-code.entity';
import { join } from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { ResetCodeService } from './reset-code.service';
import { UserService } from 'src/user/user.service';
import { AuthJwtService } from 'src/auth-jwt/auth-jwt.service';
import { PostEntity } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
import { NotificationModule } from 'src/notification/notification.module';
// import { ConfigService } from '@nestjs/config';

// const configService = new ConfigService();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // Servidor SMTP
        port: 587,
        secure: true, // true para TLS; false para otros protocolos

        auth: {
          user: 'sportsmatchdigital.app@gmail.com',
          pass: 'bwsg varr alfu cjsl' // Contraseña del correo electrónico de origen
        }
      },
      defaults: {
        from: 'sportsmatch.digital@app.com' // Dirección de correo electrónico del remitente
      },
      template: {
        dir: join(__dirname, '..', 'template'), // Directorio de plantillas de correo electrónico

        options: {
          strict: false
        }
      }
    }),
    TypeOrmModule.forFeature([ResetCodeEntity, UserEntity, PostEntity]),
    NotificationModule
  ],
  exports: [SendMailService],
  controllers: [SendMailController, ResetCodeController],
  providers: [
    SendMailService,
    ResetCodeService,
    UserService,
    AuthJwtService,
    PostService
  ]
})
export class SendMailModule {}
