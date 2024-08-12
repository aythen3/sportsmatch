import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';

enum SportmanType {
  player = 'player',
  coach = 'coach',
  invitado = 'invitado'
}
class SportmanData {
  @IsEnum(SportmanType)
  @IsNotEmpty()
  type: SportmanType;

  @IsObject()
  @IsOptional()
  info: { [key: string]: any };
}

export class CreateSportmanDto {
  @ValidateNested() // Validar la propiedad anidada
  sportmanData: SportmanData;

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
