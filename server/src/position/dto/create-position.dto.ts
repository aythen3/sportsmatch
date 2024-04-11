import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { SportEntity } from 'src/sport/entities/sport.entity';

export class CreatePositionDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  sport: any;}
