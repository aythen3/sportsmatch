import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString, IsDate, IsOptional, ValidateNested, IsArray } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  recipientId: string;

  @IsNotEmpty()
  @IsBoolean()
  read?: boolean = false;
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
