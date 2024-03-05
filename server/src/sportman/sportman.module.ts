import { Module } from '@nestjs/common';
import { SportmanService } from './sportman.service';
import { SportmanController } from './sportman.controller';

@Module({
  controllers: [SportmanController],
  providers: [SportmanService],
})
export class SportmanModule {}
