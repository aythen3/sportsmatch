import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferDto } from './create-offer.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;
}
