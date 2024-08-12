import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoEntityDto } from './create-info-entity.dto';

export class UpdateInfoEntityDto extends PartialType(CreateInfoEntityDto) {}
