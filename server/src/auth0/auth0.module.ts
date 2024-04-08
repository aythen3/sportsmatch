import { Module } from '@nestjs/common';
import { Auth0Service } from './auth0.service';
import { Auth0Controller } from './auth0.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [Auth0Controller],
  providers: [Auth0Service, GoogleStrategy]
})
export class Auth0Module {}
