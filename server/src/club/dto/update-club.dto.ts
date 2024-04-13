import { PartialType } from '@nestjs/mapped-types';
import { CreateClubDto } from './create-club.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateClubDto extends PartialType(CreateClubDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;
  
}
