import { HttpException, Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { SportEntity } from './entities/sport.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DEPORTES } from './utils/sportAutoCreate';

@Injectable()
export class SportService {
  constructor(
    @InjectRepository(SportEntity)
    private readonly sportRepository: Repository<SportEntity>
  ) {}

  public async create(createSportDto: CreateSportDto) {
    const newSport = await this.sportRepository.save(createSportDto);

    // Si no se pudo crear el nuevo perfil, lanzar una excepción
    if (!newSport) {
      throw new HttpException('The new sport is not created', 501);
    }

    // Devolver el nuevo perfil del usuario
    return newSport;
  }

  public async findAll() {
    return this.sportRepository.find({ where: { isDelete: false } });
  }

  public async findById(id: string) {
    console.log(id);
    const sport = await this.sportRepository
      .createQueryBuilder('sport')
      .where({ id })
      .getOne();

    if (!sport) {
      throw new HttpException(`Sport id ${id} not found`, 404);
    }

    return sport;
  }
  public async update(id: number, updateSportDto: UpdateSportDto) {
    return `This action updates a #${updateSportDto} sport`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} sport`;
  }

  public async sportMaker() {
    const deportes = DEPORTES;
    try {
      const createdSport = await this.sportRepository.save(deportes);

      return createdSport;
    } catch (error) {
      throw new HttpException('Error creating sport', 505);
    }
  }
}
