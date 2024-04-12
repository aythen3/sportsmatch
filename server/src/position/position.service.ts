import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PositionEntity } from './entities/position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { POSITIONS } from './utils/positonList';
import { SportEntity } from 'src/sport/entities/sport.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
    @InjectRepository(SportEntity)
    private readonly sportRepository: Repository<SportEntity>
  ) {}

  public async create(createPositionDto: CreatePositionDto) {
    // Obtener el deporte de fútbol
    const defaultSport = await this.sportRepository.findOne({ where: { id: createPositionDto.sport } });

    // Si no se encuentra el deporte de fútbol, lanzar una excepción
    if (!defaultSport) {
      throw new HttpException('Default sport not found', HttpStatus.NOT_FOUND);
    }

    // Asignar el deporte de fútbol a la nueva posición
    
    // Guardar la nueva posición
    const newPosition = await this.positionRepository.save(createPositionDto);
    // Si no se pudo crear la nueva posición, lanzar una excepción
    if (!newPosition) {
      throw new HttpException('The new position is not created', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // Devolver la nueva posición
    return newPosition;
  }
  public async findAll() {
    return this.positionRepository
      .createQueryBuilder('position')
      .where({ isDelete: false })
      .leftJoinAndSelect('position.sport', 'sport')
      .getMany();
  }

  public async findOne(id: string) {
    const position = await this.positionRepository
      .createQueryBuilder('position')
      .where({ id })
      .leftJoinAndSelect('position.sport', 'sport')
      .getOne();

    if (!position) {
      return(`Position id ${id} not found`);
    }
    return position;
  }

  public async update(id: string, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${updatePositionDto} position`;
  }

  public async positionMaker() {
    const position = POSITIONS;
    for (const sportData of position) {
      const sport = await this.sportRepository.findOne({
        where: { name: sportData.sport }
      });

      if (!sport) {
        return('Sport not found');
      }

      for (const positionName of sportData.positions) {
        const newPosition = this.positionRepository.create({
          name: positionName,
          sport: sport
        });
        await this.positionRepository.save(newPosition);
      }
    }
    return await this.positionRepository.find({ where: { isDelete: false } });
  }
}
