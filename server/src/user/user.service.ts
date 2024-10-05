import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { ErrorManager } from 'src/utils/error.manager';
import { SendMailService } from '../send-mail/send-mail.service';
import Stripe from 'stripe';
import * as nodemailer from 'nodemailer';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { PostEntity } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
const configService = new ConfigService();

@Injectable()
export class UserService {
  private readonly stripe: Stripe;
  private readonly transporter: nodemailer.Transporter;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,

    private readonly sendMailService: SendMailService,
    private readonly postService: PostService
  ) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,

      auth: {
        user: 'sportsmatchdigital.app@gmail.com',
        pass: 'bwsg varr alfu cjsl'
      }
    });
    this.stripe = new Stripe(
      'sk_test_51OocYQGmE60O5ob7URy3YpGfHVIju6x3fuDdxXUy5R0rAdaorSHfskHNcBHToSoEfwJhFHtFDCguj7aGPlywD2pp00f2X9h9et'
    );
  }

  /**
   * Método para crear un nuevo usuario
   * @param {CreateUserDto} createUserDto - Los datos del usuario a crear
   */
  async createSubscription(customerId: string, priceId: string): Promise<any> {
    try {
      const subscription = await this.stripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId
          }
        ],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent']
      });
      console.log('prueba');
      return {
        subscriptionId: subscription.id,
        clientSecret: subscription
      };
    } catch (error) {
      throw new Error('Error creating subscription');
    }
  }

  async enviarCorreoConfirmacion(usuario: UserEntity) {
    const facebookIcon = join(__dirname, '..', '..', 'assets', 'image.png');
    try {
      const mailOptions = {
        from: 'sportsmatch.digital@gmail.com',
        to: usuario.email,
        subject: 'Confirma tu correo electrónico para completar tu registro',
        attachments: [
          /* {
          filename: 'sportspot.png',
          path: sportspotLogo,
          cid: 'sportSpot'a
        }, */
          {
            filename: 'image.png',
            path: facebookIcon,
            cid: 'facebookIcon'
          }
        ],
        html: `
    <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 40px;
      }
      a {
        color: #337ab7;
        text-decoration: none;
      }
      a:hover {
        color: #23527c;
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
        display: flex; /* Agrega esto */
        margin: 10px; /* Agrega esto para separar las imágenes */
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="cid:facebookIcon" class='iconImg'/>
      
    </div>
    <h1>Confirmación de cuenta</h1>
    <p>Hola ${usuario.nickname},
      ¡Estamos emocionados de que te unas a SportsMatch!
      Para completar tu registro y activar tu cuenta, por favor verifica tu dirección
      de correo electrónico haciendo clic en el siguiente enlace:</p>
    <a href="http://163.172.172.81:3000/api/user/confirmar-cuenta/${usuario.tokenConfirmacion}">Click aquí</a>
     <p>Si no puedes hacer clic en el enlace, copia y pega la siguiente URL en tu
        navegador:</p>
    <a href="http://163.172.172.81:3000/api/user/confirmar-cuenta/${usuario.tokenConfirmacion}">http://163.172.172.81:3000/api/user/confirmar-cuenta/${usuario.tokenConfirmacion}</a>
    <p>Si no solicitaste este registro, por favor ignora este correo.
       Saludos,
       el equipo de SportsMatch.</p>
  </body>
</html>
      `
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error, 'rerrereiomfgasmf');
      return { message: 'este es el error', error };
    }
  }

  async enviarReportePublicacion(motivo: string, publicationId: string) {
    const sportspotLogo = join(__dirname, '..', '..', 'assets', 'image.png');
    try {
      const publication = await this.postService.findOne(publicationId);
      const mailOptions = {
        from: 'sportsmatchdigital.app@gmail.com',
        to: 'sportsmatchdigital.app@gmail.com',
        subject: `Reporte de publicación: ${publication.id}`,
        attachments: [
          {
            filename: 'image.png',
            path: sportspotLogo,
            cid: 'sportSpot'
          }
        ],
        html: `
        <html>
          <head>
            <style>
             .header {
               background-color: #000;
               padding: 20px;
               text-align: center;
             }
             .iconImg {
               max-width: 100px;
               max-height: 100px;
               margin: auto;
               display: block;
             }
           </style>
          </head>
          <body>
            <div class="header">
              <img src="cid:sportSpot" class='iconImg'/>
            </div>
            <h1>Reporte de publicación</h1>
            <p>Publicación reportada: ${publication.id}</p>
            <p>Motivo del reporte: ${motivo}</p>
            <p>Para revisar la publicación, haga clic en el siguiente enlace:</p>
            <a href="${publication.image}">Ver publicación</a>
            <p>Para eliminar la publicación, haga clic en el siguiente enlace:</p>
            <a href="http://163.172.172.81:3000/api/user/eliminar-publicacion/${publication.id}">Eliminar publicación</a>
          </body>
        </html>
      `
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error, 'error al enviar reporte');
      return { message: 'Error al enviar reporte', error };
    }
  }

  public async eliminarPublicacion(id: string) {
    try {
      const post = await this.postRepository.findOne({ where: { id } });
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Publicación id: ${id} no encontrada`
        });
      }
      await this.postRepository.delete(id);
      return { message: `Publicación id: ${id} eliminada correctamente` };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async confirmarCuenta(tokenConfirmacion: string) {
    const usuario = await this.userRepository.findOneBy({
      tokenConfirmacion
    });
    if (!usuario) {
      throw new Error('Token de confirmación no válido');
    }
    usuario.emailCheck = true;
    usuario.tokenConfirmacion = null;
    await this.userRepository.save(usuario);
    return usuario;
  }

  async eliminarTokenConfirmacion(usuario: UserEntity) {
    usuario.tokenConfirmacion = null;
    await this.userRepository.save(usuario);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async generarTokenRecuperacion(usuario: UserEntity) {
    const token = crypto.randomBytes(20).toString('hex');
    usuario.tokenRecuperacion = token;
    await this.userRepository.save(usuario);
    return token;
  }

  async enviarCorreoRecuperacion(usuario: UserEntity, token: string) {
    const facebookIcon = join(__dirname, '..', '..', 'assets', 'image.png');

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,

      auth: {
        user: 'azschiaffino@gmail.com',
        pass: 'ccuk lafv fpmh bijv'
      }
    });
    console.log(transporter, 'transsss');

    const mailOptions = {
      from: 'sportsmatch.digital@gmail.com',
      to: usuario.email,
      attachments: [
        /* {
          filename: 'sportspot.png',
          path: sportspotLogo,
          cid: 'sportSpot'a
        }, */
        {
          filename: 'image.png',
          path: facebookIcon,
          cid: 'facebookIcon'
        }
      ],
      subject: 'Recuperación de contraseña',
      html: `
      <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 40px;
      }
      a {
        color: #337ab7;
        text-decoration: none;
      }
      a:hover {
        color: #23527c;
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
      <img src="cid:facebookIcon" class='iconImg'/>
    </div>
    <h1>Recuperación de contraseña</h1>
    <p>Haga clic en el siguiente enlace para cambiar su contraseña:</p>
    <a href="http://163.172.172.81:3000/api/user/cambiar-contrasena/${token}">Click aquí</a>
  </body>
</html>
    `
    };

    await this.transporter.sendMail(mailOptions);
  }

  async findByTokenRecuperacion(token: string) {
    return await this.userRepository.findOneBy({ tokenRecuperacion: token });
  }

  async cambiarContrasena(usuario: UserEntity, contrasena: string) {
    usuario.password = await hash(contrasena, +process.env.HASH_SALT);
    usuario.tokenRecuperacion = null;
    await this.userRepository.save(usuario);
  }

  async cancelSubscription(subscriptionId: string) {
    try {
      const deletedSubscription =
        await this.stripe.subscriptions.cancel(subscriptionId);
      return deletedSubscription;
    } catch (error) {
      throw new Error('Failed to cancel subscription.');
    }
  }

  async createPaymentSheet(customerId: string, priceId: number): Promise<any> {
    try {
      // Crear una llave efímera para el cliente
      const ephemeralKey = await this.stripe.ephemeralKeys.create(
        { customer: customerId },
        { apiVersion: '2024-06-20' }
      );

      // Crear un intento de pago
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: priceId, // Deberías obtener el monto del precio seleccionado
        currency: 'eur', // Deberías obtener la moneda del precio seleccionado
        customer: customerId,
        automatic_payment_methods: {
          enabled: true
        }
      });

      // Devolver los datos necesarios para la hoja de pago
      return {
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customerId,
        publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx'
      };
    } catch (error) {
      throw new Error('Error creating payment sheet');
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
            state: 'CA'
          },
          name
        },
        address: {
          city: 'Brothers',
          country: 'US',
          line1: '27 Fredrick Ave',
          postal_code: '97712',
          state: 'CA'
        }
      });
      return customer;
    } catch (error) {
      throw new Error('Error creating customer');
    }
  }
  async getSuscription(id: string): Promise<any> {
    try {
      const sus = await this.stripe.subscriptions.retrieve(id);
      // const customer = await this.stripe.customers.create({
      //   email,
      //   name,
      //   shipping: {
      //     address: {
      //       city: 'Brothers',
      //       country: 'US',
      //       line1: '27 Fredrick Ave',
      //       postal_code: '97712',
      //       state: 'CA'
      //     },
      //     name
      //   },
      //   address: {
      //     city: 'Brothers',
      //     country: 'US',
      //     line1: '27 Fredrick Ave',
      //     postal_code: '97712',
      //     state: 'CA'
      //   }
      // });
      return sus;
    } catch (error) {
      throw new Error('Error creating customer');
    }
  }

  async followUser(userId: string, userToFollowId: string): Promise<string> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['followingUsers']
    });

    const userToFollow = await this.userRepository.findOne({
      where: { id: userToFollowId },
      relations: ['followers'] // Cargar la relación 'followers' para poder hacer el push
    });

    if (!userToFollow) {
      throw new NotFoundException('User to follow not found');
    }

    // Verificar si ya sigue al usuario
    if (user.followingUsers.some((u) => u.id === userToFollowId)) {
      return 'You are already following this user';
    }

    // Agregar el usuario a la lista de seguidores de userToFollow
    userToFollow.followers.push(user);

    // Agregar userToFollow a la lista de followingUsers de user
    user.followingUsers.push(userToFollow);

    // Guardar ambos usuarios
    await this.userRepository.save(user);
    await this.userRepository.save(userToFollow);

    return 'Successfully followed the user';
  }

  async unfollowUser(
    userId: string,
    userToUnfollowId: string
  ): Promise<string> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['followingUsers']
    });

    const userToUnfollow = await this.userRepository.findOne({
      where: { id: userToUnfollowId }
    });

    if (!userToUnfollow) {
      throw new NotFoundException('User to unfollow not found');
    }

    // Verificar si ya no sigue al usuario
    user.followingUsers = user.followingUsers.filter(
      (u) => u.id !== userToUnfollowId
    );

    await this.userRepository.save(user);

    return 'Successfully unfollowed the user';
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
        name: createUserDto.nickname // Puedes ajustar esto según tu lógica de aplicación
      });
      const tokenConfirmacion = crypto.randomBytes(20).toString('hex');
      createUserDto.tokenConfirmacion = tokenConfirmacion;

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
      // await this.sendMailService.sendRegistrationNotification(newProfile.email);
      await this.enviarCorreoConfirmacion(newProfile);
      return newProfile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // Método para crear usuario con Firebase
  public async createUserAuth(createUserDto: CreateUserDto) {
    const tokenConfirmacion = crypto.randomBytes(20).toString('hex');
    createUserDto.tokenConfirmacion = tokenConfirmacion;
    try {
      let existingUser: any;

      // Verificar si el usuario ya existe en tu base de datos local
      if (createUserDto.googleId) {
        existingUser = await this.userRepository.findOne({
          where: { googleId: createUserDto.googleId }
        });
      } else if (createUserDto.appleId) {
        existingUser = await this.userRepository.findOne({
          where: { appleId: createUserDto.appleId }
        });
      } else if (createUserDto.facebookId) {
        existingUser = await this.userRepository.findOne({
          where: { facebookId: createUserDto.facebookId }
        });
      }

      // Si el usuario ya existe, lanzar una excepción
      if (existingUser) {
        return { user: existingUser, message: 'el usuario existe' };
      }
      const stripeCustomer = await this.stripe.customers.create({
        email: createUserDto.email,
        name: createUserDto.nickname // Puedes ajustar esto según tu lógica de aplicación
      });

      // Guardar el ID de cliente de Stripe en el DTO del usuario
      createUserDto.stripeId = stripeCustomer.id;
      // Crear el nuevo perfil del usuario en tu base de datos
      createUserDto.club = null;
      createUserDto.sportman = null;
      const newProfile: UserEntity =
        await this.userRepository.save(createUserDto);
      // Si no se pudo crear el nuevo perfil, lanzar una excepción
      if (!newProfile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Failed to create new user profile'
        });
      }
      await this.enviarCorreoConfirmacion(newProfile);
      // Enviar notificación de registro por correo electrónico
      // if (newProfile.email) {
      //   await this.sendMailService.sendRegistrationNotification(newProfile.email);
      //   console.log(newProfile, "new profile")
      // }
      // Devolver el nuevo perfil del usuario
      return newProfile;
    } catch (error) {
      console.log(error);
      // Manejar errores
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findChild(id: string, type: string) {
    let user: UserEntity | undefined;
    try {
      if (type === 'sportman') {
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
        where: { isDelete: false },
        relations: ['club', 'sportman']
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
      const user = await this.userRepository.findOne({
        where: { id },
        relations: [
          'club',
          'sportman',
          'posts',
          'comments',
          'likes',
          'followers',
          'followers.club',
          'followers.sportman',

          'followingUsers'
        ]
      });

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
        relations: [
          'club',
          'sportman',
          'followingUsers',
          'followers',
          'followers.sportman',
          'followers.club'
        ]
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

  async findInfoRelation(userId: number, relations: string[]): Promise<any> {
    try {
      const validRelations = this.validateRelations(relations);

      // Verificar si hay al menos una relación válida
      if (validRelations.length === 0) {
        throw new Error('No se han proporcionado relaciones válidas.');
      }

      // Construir objeto de opciones para la consulta
      const options: any = { where: { id: userId }, relations: validRelations };
      console.log('options es', options);
      // Realizar la consulta del post con las relaciones especificadas
      const user = await this.userRepository.findOne(options);

      if (!user) {
        throw new NotFoundException(
          `No se encontró ningún post con el ID ${userId}.`
        );
      }

      return user;
    } catch (error) {
      console.log('este es el error ', error);
    }
  }

  private validateRelations(relations: string[]): string[] {
    const validRelations: string[] = [];

    // Definir relaciones válidas permitidas en la entidad Match
    const allowedRelations = ['likes', 'club', 'sportman', 'posts', 'comments']; // Agregar más según sea necesario

    // Filtrar relaciones válidas
    relations.forEach((relation) => {
      if (allowedRelations.includes(relation)) {
        validRelations.push(relation);
      }
    });

    return validRelations;
  }

  async getByGoogleId(googleId: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { googleId: googleId },
      relations: ['club', 'sportman']
    });
    return user;
  }

  async getByAppleId(appleId: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: { appleId: appleId },
      relations: ['club', 'sportman']
    });
  }

  async getByFacebookId(facebookId: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: { facebookId: facebookId },
      relations: ['club', 'sportman']
    });
  }

  async findByEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserEntity | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      return undefined;
    }

    const passwordMatch = await compare(password, user.password);

    return passwordMatch ? user : undefined;
  }

  public async changePassword(id: string, newPassword: string): Promise<any> {
    try {
      // Encriptar la nueva contraseña
      const hashedPassword = await hash(newPassword, +process.env.HASH_SALT);

      // Actualizar la contraseña en la base de datos
      const result = await this.userRepository.update(id, {
        password: hashedPassword
      });

      // Verificar si la actualización fue exitosa
      if (result.affected === 0) {
        return { message: 'Error al cambiar la clave' };
      }

      return { message: 'Clave modificada con éxito' };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async existeGoogleId(googleId: string): Promise<boolean> {
    const entidad = await this.userRepository.findOne({
      where: { googleId }
    });
    return entidad !== null;
  }

  async existeAppleId(appleId: string): Promise<boolean> {
    const entidad = await this.userRepository.findOne({
      where: { appleId }
    });
    console.log(entidad, 'entidad');
    return entidad !== null;
  }

  public async updateToken(id: string, token: string): Promise<any> {
    try {
      const result = await this.userRepository.update(id, {
        push_token: token
      });
      if (result.affected === 0) {
        return { message: 'Error al cambiar el Push' };
      }

      return { message: 'Push modificada con éxito' };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async banUser(userId: string, bannedUserId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const bannedUser = await this.userRepository.findOne({
      where: { id: bannedUserId }
    });

    if (!user || !bannedUser) {
      throw new Error('Usuario no encontrado');
    }

    // Agregar el ID del usuario banned a la lista de banned del usuario
    if (!user.banned) {
      user.banned = [];
    }
    user.banned.push(bannedUserId);

    // Agregar el ID del usuario a la lista de banned del usuario banned
    if (!bannedUser.banned) {
      bannedUser.banned = [];
    }
    bannedUser.banned.push(userId);

    await this.userRepository.save(user);
    await this.userRepository.save(bannedUser);

    return { message: 'Usuario bloqueado correctamente' };
  }

  async unbanUser(userId: string, unbannedUserId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const unbannedUser = await this.userRepository.findOne({
      where: { id: unbannedUserId }
    });

    if (!user || !unbannedUser) {
      throw new Error('Usuario no encontrado');
    }

    // Eliminar el ID del usuario unbanned de la lista de banned del usuario
    if (user.banned) {
      user.banned = user.banned.filter((id) => id !== unbannedUserId);
    }

    // Eliminar el ID del usuario de la lista de banned del usuario unbanned
    if (unbannedUser.banned) {
      unbannedUser.banned = unbannedUser.banned.filter((id) => id !== userId);
    }

    await this.userRepository.save(user);
    await this.userRepository.save(unbannedUser);

    return { message: 'Usuario desbloqueado correctamente' };
  }
}
