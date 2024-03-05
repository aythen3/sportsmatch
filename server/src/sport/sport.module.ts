import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportController } from './sport.controller';

@Module({
  controllers: [SportController],
  providers: [SportService],
})
export class SportModule {}
