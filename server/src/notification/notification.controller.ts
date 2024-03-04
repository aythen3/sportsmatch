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
}
