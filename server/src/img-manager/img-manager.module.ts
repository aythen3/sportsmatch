import { Module } from '@nestjs/common';
import { ImgManagerService } from './img-manager.service';
import { ImgManagerController } from './img-manager.controller';
import { MulterModule } from '@nestjs/platform-express';
import { ImgManager } from './entities/img-manager.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImgManager]),
    MulterModule.register({
      storage: null
    })
  ],
  exports:[TypeOrmModule.forFeature([ImgManager])],
  controllers: [ImgManagerController],
  providers: [ImgManagerService]
})
export class ImgManagerModule {}
