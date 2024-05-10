import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateUserDto {


  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsString()
  email: string;

  @IsOptional()
  googleId?: string | null;
  @IsOptional()
  facebookId?: string | null;
  @IsOptional()
  appleId?: string | null;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  stripeId: any;

  @IsOptional()
  planId: any;

  @IsOptional()
  club: any;

  @IsOptional()
  sportman: any;

  @IsNotEmpty()
  @IsString()
  type: 'sportman' | 'club';
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
