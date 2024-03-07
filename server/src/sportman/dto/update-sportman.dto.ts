import { PartialType } from '@nestjs/mapped-types';
import { CreateSportmanDto } from './create-sportman.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateSportmanDto extends PartialType(CreateSportmanDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;
}
