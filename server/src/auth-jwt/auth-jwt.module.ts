import { Global, Module } from '@nestjs/common';
import { AuthJwtService } from './auth-jwt.service';
import { AuthJwtController } from './auth-jwt.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { PostService } from 'src/post/post.service';
import { PostEntity } from 'src/post/entities/post.entity';
import { NotificationModule } from 'src/notification/notification.module';

const configService = new ConfigService();

@Global()
@Module({
  // Definir los módulos importados
  imports: [
    // Importar el módulo Jwt con la configuración de secreto y tiempo de expiración
    JwtModule.register({
      secret: configService.get('JWT_SECRET'),
      signOptions: { expiresIn: '1h' } // Opciones de firma, puedes ajustar el tiempo de expiración
    }),
    // Importar el módulo TypeOrm para la entidad UserEntity
    TypeOrmModule.forFeature([UserEntity, PostEntity]),
    NotificationModule
  ],
  // Definir los controladores utilizados
  controllers: [AuthJwtController],
  // Definir los servicios proporcionados
  providers: [AuthJwtService, UserService, SendMailService, PostService]
})
export class AuthJwtModule {}
