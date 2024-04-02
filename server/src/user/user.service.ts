import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  /**
   * Método para crear un nuevo usuario
   * @param {CreateUserDto} createUserDto - Los datos del usuario a crear
   */
  public async create(createUserDto: CreateUserDto) {
    // Encriptar la contraseña del usuario
    createUserDto.password = await hash(
      createUserDto.password,
      +process.env.HASH_SALT
    );

    // Verificar si el usuario ya existe en la base de datos
    const existingUser: UserEntity = await this.userRepository
      .createQueryBuilder('user')
      .where({ email: createUserDto.email })
      .getOne();
    // Si el usuario ya existe, lanzar una excepción
    if (existingUser) {
      throw new HttpException(
        'The email is already registered in the database',
        409
      );
    }
    // Guardar el nuevo perfil del usuario en la base de datos
    const newProfile = await this.userRepository.save(createUserDto);
    // Si no se pudo crear el nuevo perfil, lanzar una excepción
    if (!newProfile) {
      throw new HttpException('The new profile is not created', 501);
    }
    // Devolver el nuevo perfil del usuario
    return newProfile;
  }

  public async findChild(id: string, type: string) {
    let user: UserEntity | undefined;

    if (type === 'sportman') {
      console.log('entre');
      user = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .leftJoinAndSelect('user.sportman', 'sportman')
        .getOne();
    } else if (type === 'club') {
      user = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .leftJoinAndSelect('user.club', 'club')
        .getOne();
    }
    // Devolver el user encontrado
    return user;
  }

  // Método para obtener todos los usuarios
  public async findAll() {
    return await this.userRepository.find({ where: { isDelete: false } });
  }

  /**
   * Método para obtener un usuario por su ID
   * @param {string} id - El ID del usuario a buscar
   */
  public async findOne(id: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where({ id })
      .getOne();

    // Si no se encuentra el usuario, lanzar una excepción
    if (!user)
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404);
    // Devolver el usuario encontrado
    return user;
  }

  /**
   * Método para actualizar un usuario por su ID
   * @param {string} id - El ID del usuario a actualizar
   * @param {UpdateUserDto} updateUserDto - Los datos del usuario a actualizar
   */
  public async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    // Si no se encuentra el usuario, lanzar una excepción
    if (!user) {
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404);
    }

    // Actualizar el password hasheado del usuario
    for (const key in updateUserDto) {
      if (key === 'password') {
        user[key] = await hash(updateUserDto[key], +process.env.HASH_SALT);
      } else {
        user[key] = updateUserDto[key];
      }
    }
    return await this.userRepository.save(user);
  }

  /**
   * Método para eliminar un usuario por su ID
   * @param {string} id - El ID del usuario a eliminar
   */
  public async remove(id: string) {
    // Marcar al usuario como eliminado en la base de datos
    await this.userRepository.update(id, { isDelete: true });
    // Devolver el usuario eliminado
    return await this.findOne(id);
  }

  public async getByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['club', 'sportman']
    });

    if (!user) {
      throw new HttpException(`Usuario con ID ${email} no encontrado`, 404);
    }
    return user;
  }
}
