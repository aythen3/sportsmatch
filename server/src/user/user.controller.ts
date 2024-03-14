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

// Definición del controlador de usuario
@Controller('user')
export class UserController {
  // Constructor del controlador que recibe el servicio de usuario
  constructor(private readonly userService: UserService) {}

  // Método para crear un usuario
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // Método para encontrar todos los usuarios
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/child/:id')
  findChild(@Param('id') id: string, @Query('type') type: string) {
    return this.userService.findChild(id, type);
  }
  // Método para encontrar un usuario por su ID
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
}
