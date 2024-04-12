
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { ErrorManager } from 'src/utils/error.manager';
import { SendMailService } from '../send-mail/send-mail.service';
import Stripe from 'stripe';
@Injectable()
export class UserService {
  private readonly stripe: Stripe;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    
    private readonly sendMailService: SendMailService,
   
    
  ) { this.stripe = new Stripe(
    'sk_test_51OocYQGmE60O5ob7URy3YpGfHVIju6x3fuDdxXUy5R0rAdaorSHfskHNcBHToSoEfwJhFHtFDCguj7aGPlywD2pp00f2X9h9et',
  )}

  /**
   * Método para crear un nuevo usuario
   * @param {CreateUserDto} createUserDto - Los datos del usuario a crear
   */
  async createSubscription(customerId: string, priceId: string): Promise<any> {
    try {
      const subscription = await this.stripe.subscriptions.create({
        customer: customerId,
        items: [{
          price: priceId,
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });

      return {
        subscriptionId: subscription.id,
        clientSecret: subscription,
      };
    } catch (error) {
      throw new Error('Error creating subscription');
    }
  }

  async createCustomer(email: string, name: string): Promise<any> {
    try {
      const customer = await this.stripe.customers.create({
        email,
        name,
        shipping: {
          address: {
            city: 'Brothers',
            country: 'US',
            line1: '27 Fredrick Ave',
            postal_code: '97712',
            state: 'CA',
          },
          name,
        },
        address: {
          city: 'Brothers',
          country: 'US',
          line1: '27 Fredrick Ave',
          postal_code: '97712',
          state: 'CA',
        },
      });
      return customer;
    } catch (error) {
      throw new Error('Error creating customer');
    }
  }


  public async create(createUserDto: CreateUserDto) {
    try {
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
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The email is already registered in the database'
        });
      }
      const stripeCustomer = await this.stripe.customers.create({
        email: createUserDto.email,
        name: createUserDto.nickname, // Puedes ajustar esto según tu lógica de aplicación
      });

      // Guardar el ID de cliente de Stripe en el DTO del usuario
      createUserDto.stripeId = stripeCustomer.id;
      // Guardar el nuevo perfil del usuario en la base de datos
      const newProfile: UserEntity =
        await this.userRepository.save(createUserDto);
      // Si no se pudo crear el nuevo perfil, lanzar una excepción
      if (!newProfile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The new profile is not created'
        });
      }
      // Devolver el nuevo perfil del usuario
      await this.sendMailService.sendRegistrationNotification(newProfile.email);
      return newProfile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findChild(id: string, type: string) {
    let user: UserEntity | undefined;
    try {
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

      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Child not found'
        });
      }
      // Devolver el user encontrado
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // Método para obtener todos los usuarios
  public async findAll() {
    try {
      const users: UserEntity[] = await this.userRepository.find({
        where: { isDelete: false }
      });

      for (let i = 0; i < users.length; i++) {
        users[i] = await this.findChild(users[i].id, users[i].type);
      }

      if (users.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Users not found'
        });
      }
      return users;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  /**
   * Método para obtener un usuario por su ID
   * @param {string} id - El ID del usuario a buscar
   */
  public async findOne(id: string) {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .getOne();
      // Si no se encuentra el usuario, lanzar una excepción
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User id: ${id} not found`
        });
      }
      // Devolver el usuario encontrado
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  /**
   * Método para actualizar un usuario por su ID
   * @param {string} id - El ID del usuario a actualizar
   * @param {UpdateUserDto} updateUserDto - Los datos del usuario a actualizar
   */
  public async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(id);

      // Si no se encuentra el usuario, lanzar una excepción
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User id: ${id} not found`
        });
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
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  /**
   * Método para eliminar un usuario por su ID
   * @param {string} id - El ID del usuario a eliminar
   */
  public async remove(id: string) {
    try {
      // Marcar al usuario como eliminado en la base de datos
      await this.userRepository.update(id, { isDelete: true });
      // Devolver el usuario eliminado
      const user: UserEntity = await this.findOne(id);
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User id: ${id} not found`
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async getByEmail(email: string): Promise<UserEntity> {
    try {
      const user = await this.userRepository.findOne({
        where: { email },
        relations: ['club', 'sportman']
      });

      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User with email: ${email} not found`
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
