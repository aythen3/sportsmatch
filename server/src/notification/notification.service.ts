import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
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
      return(
        `Usuario con ID ${createNotificationDto.recipientId} no encontrado`
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
      return(`Notificación con ID ${id} no encontrada`);
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

  public async destroyService({ recipientId }) {
    return await this.notificationsRepository.delete({ recipientId });
  }


  async findInfoRelation(notificationId: number, relations: string[]): Promise<any> {
    try {
     const validRelations = this.validateRelations(relations);
 
     // Verificar si hay al menos una relación válida
     if (validRelations.length === 0) {
       throw new Error('No se han proporcionado relaciones válidas.');
     }
 
     // Construir objeto de opciones para la consulta
     const options: any = { where: { id: notificationId }, relations: validRelations };
 console.log("options es", options)
     // Realizar la consulta del post con las relaciones especificadas
     const notification = await this.notificationsRepository.findOne(options);
 
     if (!notification) {
       throw new NotFoundException(`No se encontró ningún post con el ID ${notificationId}.`);
     }
 
     return notification;
    } catch (error) {
     console.log('este es el error ',error)
    }
   }
 
   private validateRelations(relations: string[]): string[] {
     const validRelations: string[] = [];
 
     // Definir relaciones válidas permitidas en la entidad Match
     const allowedRelations = ["user", "club" , "offers" , "sportman" , "match" ]; // Agregar más según sea necesario
 
     // Filtrar relaciones válidas
     relations.forEach(relation => {
       if (allowedRelations.includes(relation)) {
         validRelations.push(relation);
       }
     });
 
     return validRelations;
   }
}
