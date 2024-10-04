import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';

class ClubData {
  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  field: string;

  @IsNumber()
  year: number;

  @IsNumber()
  capacity: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  sport: string;

  @IsString()
  @IsOptional()
  img_perfil?: string;

  @IsString()
  @IsOptional()
  img_front?: string;
}

export class CreateClubDto {
  @ValidateNested() // Validar la propiedad anidada
  clubData: ClubData;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Object)
  prop1?: Record<string, any>;

  @IsOptional()
  @ValidateNested()
  @Type(() => Object)
  prop2?: Record<string, any>;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  prop3?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  prop4?: string[];
}
