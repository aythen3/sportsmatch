import { IsObject, IsOptional } from 'class-validator';

export class CreateSkillDto {
  @IsObject()
  @IsOptional()
  info: { [key: string]: any };
}
