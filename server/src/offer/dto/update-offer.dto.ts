import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferDto } from './create-offer.dto';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  inscriptions?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  matches?: string[];
}
