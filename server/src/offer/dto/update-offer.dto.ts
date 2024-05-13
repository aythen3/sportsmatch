import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferDto } from './create-offer.dto';
import { IsArray, IsBoolean, IsInt, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ClubEntity } from 'src/club/entities/club.entity';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
 
  @IsString()
  @IsOptional()
  position: any;

  @IsString()
  @IsOptional()
  posit: string;


  @IsString()
  @IsOptional()
  paused: boolean;


  @IsString()
  @IsOptional()
  matchId?: string;

  @IsString()
  @IsOptional()
  clubId: string;

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

  @IsBoolean()
  @IsOptional()
  isDelete: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  inscriptions?: string[];

  @IsString()
  @IsOptional()
  sexo: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  matches?: string[];

  // Nuevas propiedades agregadas
  @IsString()
  @IsOptional()
  category: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(10)
  urgency: number;

  @IsBoolean()
  @IsOptional()
  retribution: boolean;

  @IsOptional()
  club?: ClubEntity;
}
