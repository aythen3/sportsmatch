import { PartialType } from '@nestjs/mapped-types';
import { CreatePositionDto } from './create-position.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePositionDto extends PartialType(CreatePositionDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;
}
