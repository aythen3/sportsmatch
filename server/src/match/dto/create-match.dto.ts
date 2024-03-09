import { IsOptional, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsOptional()
  offerId: string;
}
