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
  // Método para manejar las solicitudes POST en la ruta '/auth/login'
@Post('login')
// Método asíncrono que maneja las solicitudes de inicio de sesión
async login(@Body() body: { email?: string; password?: string; googleId?: string; appleId?: string; facebookId?: string }) {
  console.log(body,"body login")
  try {
    let user;

    // Si se proporciona googleId, appleId o facebookId en el cuerpo de la solicitud,
    // buscar al usuario por esos identificadores únicos
    if (body.googleId) {
      user = await this.userService.getByGoogleId(body.googleId);
      console.log(user,"usuario de google")
      return  await this.authJwtService.loginTerceros(user)

    } else if (body.appleId) {
      user = await this.userService.getByAppleId(body.appleId);
     
      return await this.authJwtService.loginTerceros(user)


    } else if (body.facebookId) {   
      user = await this.userService.getByFacebookId(body.facebookId);
      return await this.authJwtService.loginTerceros(user)

    } else {
      // Si no se proporcionan identificadores únicos, buscar al usuario por correo electrónico y contraseña   
      const user = await this.userService.getByEmail(body.email);
    // Valida las credenciales del usuario y genera un token JWT si son válidas
       return this.authJwtService.loginValidate(user, body.password);
    }

    // Validar las credenciales del usuario y generar un token JWT si son válidas
  } catch (error) {
    // Manejar errores
   return ({"error": error})
  }
}


  @Post('google-login')
  // Método asíncrono que maneja las solicitudes de inicio de sesión
  async loginGoogle(@Body() body: any) {
    console.log(body);
    return body;
  }
}
