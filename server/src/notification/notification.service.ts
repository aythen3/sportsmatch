import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationEntity } from './entities/notification.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Expo from 'expo-server-sdk';
import { ChatGateway } from 'src/chat/chat.gateway';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationsRepository: Repository<NotificationEntity>,
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private chatGateway: ChatGateway
  ) {}

  public async markAllAsRead(userId: string): Promise<void> {
    // Busca todas las notificaciones del usuario que no están leídas
    const notifications = await this.notificationsRepository.find({
      where: { receiverId: userId, read: false, isDelete: false }
    });

    if (!notifications.length) {
      throw new NotFoundException(
        `No se encontraron notificaciones no leídas para el usuario con ID ${userId}`
      );
    }

    // Actualiza todas las notificaciones encontradas a read: true
    await this.notificationsRepository.update(
      { receiverId: userId, read: false, isDelete: false },
      { read: true }
    );
  }

  async createService(createNotificationDto: CreateNotificationDto) {
    console.log(createNotificationDto, 'dto');
    console.log(new Date(), 'dto');

    try {
      const notification = this.notificationsRepository.create(
        createNotificationDto
      );
      const user = await this.usersRepository.findOne({
        where: { id: createNotificationDto.senderId },
        relations: ['sportman', 'club']
      });
      notification.user = user;
      if (createNotificationDto.post) {
        notification.post = createNotificationDto.post;
      }

      // enviamos el push
      const user_push = await this.usersRepository.findOneBy({
        id: createNotificationDto.receiverId
      });
      console.log(user_push, 'user_push');
      notification.receiverId = createNotificationDto.receiverId;

      await this.notificationsRepository.save(notification);
      this.chatGateway.sendNotificationToUser(
        createNotificationDto.receiverId,
        'notification',
        {
          message: 'Hello!'
        }
      );
      const expo = new Expo({
        useFcmV1: true // this can be set to true in order to use the FCM v1 API
      });
      await expo
        .sendPushNotificationsAsync([
          {
            to: user_push.push_token,
            sound: 'default',
            title: `${user?.sportman?.info?.nickname || user?.club?.name}`,
            body: createNotificationDto.message,
            priority: 'high'
          }
        ])
        .then((e) => console.log(e, 'ee'));
      return notification;
    } catch (error) {
      console.log('error', error);
      return { error };
    }
  }

  public async findAllByUserId(userId: string) {
    const notifications = await this.notificationsRepository.find({
      where: { receiverId: userId, isDelete: false },
      relations: ['user', 'user.sportman', 'user.club']
    });

    if (!notifications.length) {
      return [];
    }

    return notifications;
  }
  public async getAllService(query: { [key: string]: any }) {
    const where = { isDelete: false };
    Object.keys(query).forEach((key) => {
      where[key] = query[key];
    });
    return await this.notificationsRepository.find({ where });
  }

  public async getOneService(id: string) {
    const notifications = await this.notificationsRepository
      .createQueryBuilder('notification')
      .where({ id })
      .getOne();

    if (!notifications) {
      return `Notificación con ID ${id} no encontrada`;
    }

    return notifications;
  }

  public async updateService(
    id: string,
    updateNotificationDto: UpdateNotificationDto
  ): Promise<NotificationEntity> {
    const notifications = await this.notificationsRepository
      .createQueryBuilder('notification')
      .where({ id })
      .getOne();

    if (!notifications) {
      throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
    }

    Object.keys(updateNotificationDto).forEach((key) => {
      notifications[key] = updateNotificationDto[key];
    });

    return await this.notificationsRepository.save(notifications);
  }

  public async deleteService(id) {
    await this.notificationsRepository.update(id, { isDelete: true });
    return await this.getOneService(id);
  }

  public async destroyService({ receiverId }) {
    return await this.notificationsRepository.delete({ receiverId });
  }

  async findInfoRelation(
    notificationId: number,
    relations: string[]
  ): Promise<any> {
    try {
      const validRelations = this.validateRelations(relations);

      // Verificar si hay al menos una relación válida
      if (validRelations.length === 0) {
        throw new Error('No se han proporcionado relaciones válidas.');
      }

      // Construir objeto de opciones para la consulta
      const options: any = {
        where: { id: notificationId },
        relations: validRelations
      };
      console.log('options es', options);
      // Realizar la consulta del post con las relaciones especificadas
      const notification = await this.notificationsRepository.findOne(options);

      if (!notification) {
        throw new NotFoundException(
          `No se encontró ningún post con el ID ${notificationId}.`
        );
      }

      return notification;
    } catch (error) {
      console.log('este es el error ', error);
    }
  }

  private validateRelations(relations: string[]): string[] {
    const validRelations: string[] = [];

    // Definir relaciones válidas permitidas en la entidad Match
    const allowedRelations = ['user', 'club', 'offers', 'sportman', 'match']; // Agregar más según sea necesario

    // Filtrar relaciones válidas
    relations.forEach((relation) => {
      if (allowedRelations.includes(relation)) {
        validRelations.push(relation);
      }
    });

    return validRelations;
  }
}
