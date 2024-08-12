import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-skill.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;
}
