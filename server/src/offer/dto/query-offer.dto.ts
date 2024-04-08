import { IsOptional, ValidateNested } from 'class-validator';

class OfferData {
  @IsOptional()
  sexo: string;

  @IsOptional()
  category: string;

  @IsOptional()
  urgency: number;

  @IsOptional()
  retribution: boolean;
}
export class QueryOfferDto {
  @ValidateNested()
  offerData: OfferData;

  @IsOptional()
  positionId: string;

  @IsOptional()
  matchId?: string;

  @IsOptional()
  clubId: string;
}
