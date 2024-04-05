import { HttpException, Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { SportEntity } from './entities/sport.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DEPORTES } from './utils/sportAutoCreate';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class SportService {
  constructor(
    @InjectRepository(SportEntity)
    private readonly sportRepository: Repository<SportEntity>
  ) {}

  public async create(createSportDto: CreateSportDto) {
    try {
      const newSport = await this.sportRepository.save(createSportDto);

      // Si no se pudo crear el nuevo perfil, lanzar una excepción
      if (!newSport) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `Sport not created`
        });
      }

      // Devolver el nuevo perfil del usuario
      return newSport;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll() {
    try {
      const sports: SportEntity[] = await this.sportRepository.find({
        where: { isDelete: false }
      });
      if (!sports.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Sports not found'
        });
      }
      return sports;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findById(id: string) {
    try {
      const sport = await this.sportRepository
        .createQueryBuilder('sport')
        .where({ id })
        .getOne();

      if (!sport) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Sport not found'
        });
      }

      return sport;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
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
