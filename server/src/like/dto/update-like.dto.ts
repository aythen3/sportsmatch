import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeDto } from './create-like.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateLikeDto extends PartialType(CreateLikeDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;
}
