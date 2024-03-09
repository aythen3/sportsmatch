import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested
} from 'class-validator';

enum Sexo {
  Male = 'Male',
  Female = 'Female',
  Otro = 'Otro'
}

class OfferData {
  @IsEnum(Sexo)
  sexo: Sexo;

  @IsString()
  category: string;

  @IsInt()
  @Min(0)
  @Max(10)
  urgency: number;

  @IsBoolean()
  retribution: boolean;
}
export class CreateOfferDto {
  @ValidateNested()
  offerData: OfferData;

  @IsString()
  @IsOptional()
  positionId: string;

  @IsString()
  @IsOptional()
  matchId?: string;

  @IsString()
  @IsOptional()
  clubId: string;
}
