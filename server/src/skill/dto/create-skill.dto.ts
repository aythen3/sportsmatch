import { Type } from 'class-transformer';
import { IsArray, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateSkillDto {
  @IsObject()
  @IsOptional()
  info: { [key: string]: any };

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
