import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationEntity } from './entities/notification.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { InfoEntity } from 'src/info-entity/entities/info-entity.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { ChatModule } from 'src/chat/chat.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NotificationEntity,
      UserEntity,
      InfoEntity,
      ClubEntity
    ]),
    ChatModule
  ],
  exports: [
    NotificationService,
    TypeOrmModule.forFeature([NotificationEntity])
  ],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule {}
