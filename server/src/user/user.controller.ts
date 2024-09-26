// Importaciones necesarias para el controlador de usuario
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  NotFoundException,
  InternalServerErrorException
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { AuthGuard } from 'src/auth-jwt/guards/auth.guard';
import { PublicAccess } from 'src/auth-jwt/decorators/public.decorator';
import { PostService } from 'src/post/post.service';

// Definición del controlador de usuario

@Controller('user')
// @UseGuards(AuthGuard)
export class UserController {
  // Constructor del controlador que recibe el servicio de usuario
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService
  ) {}
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

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string) {
    try {
      const usuario = await this.userService.findByEmail(email);
      if (!usuario) {
        return false; // Devuelve false si no se encuentra el usuario
      }
      return usuario; // Devuelve el usuario encontrado
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error al obtener el usuario');
    }
  }
  @Get('google/:googleId')
  async verificarGoogleId(@Param('googleId') googleId: string) {
    const existe = await this.userService.existeGoogleId(googleId);
    return { existe };
  }
  @Get('apple/:appleId')
  async verificarAppleId(@Param('appleId') appleId: string) {
    const existe = await this.userService.existeAppleId(appleId);
    return { existe };
  }
  // Método para encontrar todos los usuarios
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('subscription/:idSus')
  findSuscription(@Param('idSus') idSus: string) {
    return this.userService.getSuscription(idSus);
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
          .header {
            background-color: #000;
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 20px;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .header img {
            display: flex;
            margin: 10px;
          }
          .error-msg {
            color: red;
            font-size: 14px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="/assets/image.png" class='iconImg' alt="Logo"/>
        </div>
        <h1>Cambiar contraseña</h1>
        <form id="form-cambiar-contrasena" action="/api/user/cambiar-contrasena/${token}" method="post">
          <input type="password" id="contrasena" name="contrasena" placeholder="Nueva contraseña" required>
          <div id="error-msg" class="error-msg"></div>
          <button type="submit" id="submit-button" disabled>Cambiar contraseña</button>
        </form>

        <script>
          const form = document.getElementById('form-cambiar-contrasena');
          const contrasenaInput = document.getElementById('contrasena');
          const errorMsg = document.getElementById('error-msg');
          const submitButton = document.getElementById('submit-button');

          // Expresión regular para validar que la contraseña tenga al menos:
          // 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$/;

          contrasenaInput.addEventListener('input', function() {
            const contrasena = contrasenaInput.value;

            // Habilitar o deshabilitar el botón dependiendo de la validación del regex
            if (regex.test(contrasena)) {
              errorMsg.textContent = ''; // Limpia el mensaje de error
              submitButton.disabled = false; // Habilita el botón
            } else {
              errorMsg.textContent = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial.'; // Mensaje de error
              submitButton.disabled = true; // Deshabilita el botón
            }
          });
        </script>
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

    // Cambiar la contraseña del usuario
    await this.userService.cambiarContrasena(usuario, contrasena);

    // Devolver el HTML de éxito
    return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 40px;
          }
          .header {
            background-color: #000;
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 20px;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .header img {
            display: flex;
            margin: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="/assets/image.png" class='iconImg' alt="Logo"/>
        </div>
        <h1>Contraseña cambiada con éxito</h1>
        <p>Tu contraseña ha sido actualizada correctamente. Ahora puedes iniciar sesión con tu nueva contraseña.</p>
     
      </body>
    </html>
  `;
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
  @Patch('update-token/:id/:token')
  async updateToken(@Param('id') id: string, @Param('token') token: string) {
    try {
      const message = await this.userService.updateToken(id, token);
      return { message: message };
    } catch (error) {
      return { message: error };
    }
  }

  @Put(':id/ban')
  async banUser(@Param('id') id: string, @Body('userId') userId: string) {
    return this.userService.banUser(id, userId);
  }

  @Delete(':id/ban')
  async unbanUser(@Param('id') id: string, @Body('userId') userId: string) {
    return this.userService.unbanUser(id, userId);
  }

  @Post('report-publication/:publicationId')
  async reportPublication(
    @Param('publicationId') publicationId: string,
    @Body('motivo') motivo: string
  ) {
    try {
      // Verificar si la publicación y el usuario existen
      const publication = await this.postService.findOne(publicationId);
      if (!publication) {
        return { message: 'Error al reportar la publicación' };
      }

      // Enviar reporte
      await this.userService.enviarReportePublicacion(motivo, publicationId);

      return { message: 'Reporte enviado con éxito' };
    } catch (error) {
      return { message: 'Error al reportar la publicación' };
    }
  }

  @Get('eliminar-publicacion/:id')
  async eliminarPublicacion(@Param('id') id: string) {
    try {
      await this.postService.remove(id);
      return `
      <html>
        <body>
          <h1>Publicación eliminada correctamente</h1>
          <p>La publicación con ID ${id} ha sido eliminada exitosamente.</p>
        </body>
      </html>
    `;
    } catch (error) {
      return `
      <html>
        <body>
          <h1>Error al eliminar publicación</h1>
          <p>Ocurrió un error al intentar eliminar la publicación con ID ${id}.</p>
        </body>
      </html>
    `;
    }
  }
}
