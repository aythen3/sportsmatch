import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsBoolean()
  @IsOptional()
  isDelete: boolean;
}
