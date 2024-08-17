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
// import { ConfigService } from '@nestjs/config';

// const configService = new ConfigService();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // Servidor SMTP
        port: 587,
        secure: false, // true para TLS; false para otros protocolos

        auth: {
          user: 'azschiaffino@gmail.com', // Correo electrónico de origen
          pass: 'ccuk lafv fpmh bijv' // Contraseña del correo electrónico de origen
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
    TypeOrmModule.forFeature([ResetCodeEntity, UserEntity])
  ],
  exports: [SendMailService],
  controllers: [SendMailController, ResetCodeController],
  providers: [SendMailService, ResetCodeService, UserService, AuthJwtService]
})
export class SendMailModule {}
