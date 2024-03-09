import { Module } from '@nestjs/common';
import { ImgManagerService } from './img-manager.service';
import { ImgManagerController } from './img-manager.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      storage: null
    })
  ],
  controllers: [ImgManagerController],
  providers: [ImgManagerService]
})
export class ImgManagerModule {}
