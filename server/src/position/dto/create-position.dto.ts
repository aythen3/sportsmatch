import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePositionDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
