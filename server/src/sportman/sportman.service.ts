import { Injectable } from '@nestjs/common';
import { CreateSportmanDto } from './dto/create-sportman.dto';
import { UpdateSportmanDto } from './dto/update-sportman.dto';

@Injectable()
export class SportmanService {
  create(createSportmanDto: CreateSportmanDto) {
    return 'This action adds a new sportman';
  }

  findAll() {
    return `This action returns all sportman`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sportman`;
  }

  update(id: number, updateSportmanDto: UpdateSportmanDto) {
    return `This action updates a #${id} sportman`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportman`;
  }
}
