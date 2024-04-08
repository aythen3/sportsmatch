import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { Auth0Service } from './auth0.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth0')
export class Auth0Controller {
  constructor(private readonly auth0Service: Auth0Service) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin(@Req() req: Request, @Res() res: Response) {
    // Inicia el flujo de autenticación de Google
    res.redirect('/auth/google/callback');
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req: Request) {
    // Maneja la respuesta de Google y redirige al usuario a la URL deseada

    return this.auth0Service.googleLogin(req);
  }
}
