import { Module } from '@nestjs/common';
import { AuthJwtService } from './auth-jwt.service';
import { AuthJwtController } from './auth-jwt.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

@Module({
  // Definir los módulos importados
  imports: [
    // Importar el módulo Jwt con la configuración de secreto y tiempo de expiración
    JwtModule.register({
      secret: configService.get('JWT_SECRET'),
      signOptions: { expiresIn: '1h' } // Opciones de firma, puedes ajustar el tiempo de expiración
    }),
    // Importar el módulo TypeOrm para la entidad UserEntity
    TypeOrmModule.forFeature([UserEntity])
  ],
  // Definir los controladores utilizados
  controllers: [AuthJwtController],
  // Definir los servicios proporcionados
  providers: [AuthJwtService, UserService]
})
export class AuthJwtModule {}
