// Importaciones necesarias para el controlador de usuario
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { AuthGuard } from 'src/auth-jwt/guards/auth.guard';
import { PublicAccess } from 'src/auth-jwt/decorators/public.decorator';

// Definición del controlador de usuario

@Controller('user')
// @UseGuards(AuthGuard)
export class UserController {
  // Constructor del controlador que recibe el servicio de usuario
  constructor(private readonly userService: UserService) {}
  // Método para crear un usuario
  @PublicAccess()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      console.log('esto es createUserDto', createUserDto);
      if (
        createUserDto.googleId ||
        createUserDto.appleId ||
        createUserDto.facebookId
      ) {
        console.log('entra con google');
        return this.userService.createUserAuth(createUserDto);
      } else {
        return this.userService.create(createUserDto);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Método para encontrar todos los usuarios
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post('stripe/create-customer')
  async createCustomer(
    @Body('email') email: string,
    @Body('name') name: string
  ) {
    try {
      const customer = await this.userService.createCustomer(email, name);
      return { success: true, customer };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Post('create-subscription')
  async createSubscription(
    @Body('customerId') customerId: string,
    @Body('priceId') priceId: string
  ) {
    try {
      const subscription = await this.userService.createSubscription(
        customerId,
        priceId
      );
      return { success: true, subscription };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Post('payment-sheet')
  async createPaymentSheet(
    @Body() payload: { customerId: string; priceId: number }
  ) {
    const { customerId, priceId } = payload;
    const response = await this.userService.createPaymentSheet(
      customerId,
      priceId
    );
    return response;
  }

  @Get('confirmar-cuenta/:tokenConfirmacion')
  async confirmarCuenta(@Param('tokenConfirmacion') tokenConfirmacion: string) {
    const usuario = await this.userService.confirmarCuenta(tokenConfirmacion);
    if (usuario.emailCheck && !usuario.tokenConfirmacion) {
      return `
      <html>
        <head>
          <title>Cuenta activada</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              margin: 40px;
            }
            h1 {
              color: #333;
            }
            p {
              color: #666;
            }
          </style>
        </head>
        <body>
          <h1>Cuenta activada con éxito</h1>
          <p>Puede iniciar sesión y empezar a usar SportsMatch</p>
        </body>
      </html>
    `;
    }
  }

  @Post('recuperar-contrasena')
  async recuperarContrasena(@Body('email') email: string) {
    const usuario = await this.userService.findByEmail(email);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    const token = await this.userService.generarTokenRecuperacion(usuario);
    await this.userService.enviarCorreoRecuperacion(usuario, token);
    return { message: 'Correo de recuperación enviado' };
  }

  @Get('cambiar-contrasena/:token')
  async cambiarContrasenaa(@Param('token') token: string) {
    const usuario = await this.userService.findByTokenRecuperacion(token);
    if (!usuario) {
      throw new Error('Token no válido');
    }
    return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 40px;
          }
        </style>
      </head>
      <body>
        <h1>Cambiar contraseña</h1>
        <form action="/api/user/cambiar-contrasena/${token}" method="post">
          <input type="password" name="contrasena" placeholder="Nueva contraseña">
          <button type="submit">Cambiar contraseña</button>
        </form>
      </body>
    </html>
  `;
  }

  @Post('cambiar-contrasena/:token')
  async cambiarContrasena(
    @Param('token') token: string,
    @Body('contrasena') contrasena: string
  ) {
    const usuario = await this.userService.findByTokenRecuperacion(token);
    if (!usuario) {
      throw new Error('Token no válido');
    }
    await this.userService.cambiarContrasena(usuario, contrasena);
    return { message: 'Contraseña cambiada con éxito' };
  }

  @Post('cancel-subscription')
  async cancelSubscription(@Body() cancelSubscriptionDto: UpdateUserDto) {
    return this.userService.cancelSubscription(cancelSubscriptionDto.planId);
  }

  @Get('/child/:id')
  findChild(@Param('id') id: string, @Query('type') type: string) {
    return this.userService.findChild(id, type);
  }
  // Método para encontrar un usuario por su ID
  @PublicAccess()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  // Método para actualizar un usuario por su ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
  // Método para eliminar un usuario por su ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post(':userId/info-relation')
  async findInfoRelation(
    @Param('userId') userId: number,
    @Body() requestBody: { relations: string }
  ): Promise<any[]> {
    // Verificar si se proporcionaron relaciones
    if (!requestBody.relations || typeof requestBody.relations !== 'string') {
      throw new Error(
        'Debe proporcionar al menos una relación como una cadena de texto.'
      );
    }
    console.log(requestBody.relations);
    // Convertir las relaciones en un array
    const relationsArray = requestBody.relations.split(',');

    // Llamar al servicio para obtener la información relacionada
    return this.userService.findInfoRelation(userId, relationsArray);
  }

  @Post('change-password/:id')
  async changePassword(
    @Param('id') id: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('newPassword') newPassword: string
  ) {
    try {
      // Verificar si el usuario existe y las credenciales son válidas
      const user = await this.userService.findByEmailAndPassword(
        email,
        password
      );
      if (!user) {
        return { message: 'Error al cambiar la clave' };
      }

      // Cambiar la contraseña
      await this.userService.changePassword(id, newPassword);

      return { message: 'Clave modificada con éxito' };
    } catch (error) {
      return { message: 'Catch' };
    }
  }
}
