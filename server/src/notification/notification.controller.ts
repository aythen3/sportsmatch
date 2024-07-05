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
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationsService: NotificationService) {}

  @Post()
  public async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.createService(createNotificationDto);
  }

  @Get()
  public async findAll(@Query() query: any) {
    return this.notificationsService.getAllService(query);
  }

  @Get('user/:userId')
  public async findAllByUserId(@Param('userId') userId: string) {
    return this.notificationsService.findAllByUserId(userId);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.notificationsService.getOneService(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return this.notificationsService.updateService(id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.deleteService(id);
  }
//no hace falta implementar porque no tiene relaciones.
  @Post(':notificationId/info-relation')
  async findInfoRelation(
    @Param('notificationId') notificationId: number, 
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
    return this.notificationsService.findInfoRelation(notificationId, relationsArray);
  }

  @Patch('user/:userId/mark-read')
  public async markAllAsRead(@Param('userId') userId: string) {
    return this.notificationsService.markAllAsRead(userId);
  }

 
}
