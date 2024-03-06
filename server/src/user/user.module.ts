import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtService } from 'src/auth-jwt/auth-jwt.service';
import { ClubEntity } from 'src/club/entities/club.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ClubEntity, SportEntity])],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, JwtService, AuthJwtService]
})
export class UserModule {}
