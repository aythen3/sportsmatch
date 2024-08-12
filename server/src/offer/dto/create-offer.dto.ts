import { Type } from 'class-transformer';
import {
  IsArray,
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



  @IsOptional()
  @IsBoolean()
  paused:boolean; 

  @IsString()
  @IsOptional()
  posit: string;

  @IsString()
  @IsOptional()
  sport: string;

  @IsString()
  @IsOptional()
  position: any;
  

  @IsString()
  @IsOptional()
  sexo: string;

  @IsString()
  @IsOptional()
  matchId?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  matches?: string[];

  @IsString()
  @IsOptional()
  clubId: string;
  
  @IsString()
  @IsOptional()
  inscriptions: string[];
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
