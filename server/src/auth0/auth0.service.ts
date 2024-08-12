import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth0Service {
  googleLogin(req) {
    if (!req.user) {
      return 'no User from google';
    }
    return {
      message: 'User info from Google',
      user: req.user
    };
  }
}
