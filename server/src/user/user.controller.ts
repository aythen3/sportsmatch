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
  UseGuards
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
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  // Método para encontrar todos los usuarios
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post('stripe/create-customer')
  async createCustomer(
    @Body('email') email: string,
    @Body('name') name: string,
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
    @Body('priceId') priceId: string,
  ) {
    try {
      const subscription = await this.userService.createSubscription(customerId, priceId);
      return { success: true, subscription };
    } catch (error) {
      return { success: false, message: error.message };
    }
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
      throw new Error('Debe proporcionar al menos una relación como una cadena de texto.');
    }
  console.log(requestBody.relations)
    // Convertir las relaciones en un array
    const relationsArray = requestBody.relations.split(',');
  
    // Llamar al servicio para obtener la información relacionada
    return this.userService.findInfoRelation(userId, relationsArray);
  }

  

}
