import { HttpException, Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationEntity } from './entities/notification.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationsRepository: Repository<NotificationEntity>,
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  public async createService(createNotificationDto: CreateNotificationDto) {
   //El que recive la notificacion
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where({ id: createNotificationDto.recipientId })
      .getOne();

    if (!user) {
      throw new HttpException(
        `Usuario con ID ${createNotificationDto.recipientId} no encontrado`,
        404
      );
    }

    const notification = this.notificationsRepository.create(
      createNotificationDto
    );
    notification.recipientId = user.id;

    return await this.notificationsRepository.save(notification);
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
      throw new HttpException(`Notificación con ID ${id} no encontrada`, 404);
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
      throw new HttpException(`Notificación con ID ${id} no encontrada`, 404);
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

  public async destroyService({ recipientId }) {
    return await this.notificationsRepository.delete({ recipientId });
  }
}
