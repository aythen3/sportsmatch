import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsOptional()
  offerId: string;

  @IsString()
  @IsOptional()
  sportmanId: any;

  @IsString()
  @IsOptional()
  userId: string;

  @IsString()
  @IsOptional()
  clubId: any;
  @IsString()
  @IsOptional()
  status: string;

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
