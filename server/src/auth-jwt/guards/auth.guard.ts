import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { Request } from 'express';
import { PUBLIC_KEY } from 'src/constants/key-decorators';
import { useToken } from 'src/utils/use.token';
import { IUseToken } from '../interfaces/auth.inteface';
import { UserService } from 'src/user/user.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      PUBLIC_KEY,
      context.getHandler()
    );

    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<Request>();

    const token = req.headers['user_token'];

    if (!token || Array.isArray(token)) {
      throw new UnauthorizedException('Invalid Token');
    }

    const manageToken: IUseToken | string = useToken(token);

    if (typeof manageToken === 'string') {
      throw new UnauthorizedException('manageToken');
    }

    if (manageToken.isExpired) {
      throw new UnauthorizedException('Token expired');
    }

    const { id } = manageToken;
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new UnauthorizedException('Invalid user');
    }
    req.idUser = user.id;

    return true;
  }
}
