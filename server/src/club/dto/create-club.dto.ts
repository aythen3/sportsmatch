import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  field: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  img_perfil?: string;

  @IsString()
  @IsOptional()
  img_front?: string;
}
