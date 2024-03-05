import { PartialType } from '@nestjs/mapped-types';
import { CreateSportmanDto } from './create-sportman.dto';

export class UpdateSportmanDto extends PartialType(CreateSportmanDto) {}
