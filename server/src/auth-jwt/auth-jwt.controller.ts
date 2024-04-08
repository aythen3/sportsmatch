import { Body, Controller, Post } from '@nestjs/common';
import { AuthJwtService } from './auth-jwt.service';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthJwtController {
  constructor(
    private readonly authJwtService: AuthJwtService,
    private readonly userService: UserService
  ) {}

  // Método para manejar las solicitudes POST en la ruta '/auth/login'
  @Post('login')
  // Método asíncrono que maneja las solicitudes de inicio de sesión
  async login(@Body() body: { email: string; password: string }) {
    // Obtiene el usuario correspondiente al correo electrónico proporcionado
    const user = await this.userService.getByEmail(body.email);
    // Valida las credenciales del usuario y genera un token JWT si son válidas
    return this.authJwtService.loginValidate(user, body.password);
  }

  @Post('google-login')
  // Método asíncrono que maneja las solicitudes de inicio de sesión
  async loginGoogle(@Body() body: any) {
    console.log(body);
    return body;
  }
}
