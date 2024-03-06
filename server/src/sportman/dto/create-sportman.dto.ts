import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';

enum SportmanType {
  player = 'player',
  coach = 'coach'
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
}
