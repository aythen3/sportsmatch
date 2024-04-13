import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { SportEntity } from 'src/sport/entities/sport.entity';

export class CreatePositionDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  sport: any;
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
