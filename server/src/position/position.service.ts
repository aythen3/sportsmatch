import { HttpException, Injectable } from '@nestjs/common';
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
    const newPosition = await this.positionRepository.save(createPositionDto);
    // Si no se pudo crear el nuevo position, lanzar una excepción
    if (!newPosition) {
      throw new HttpException('The new position is not created', 501);
    }
    // Devolver el nuevo position del usuario
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
      throw new HttpException(`Position id ${id} not found`, 404);
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
        throw new HttpException('Sport not found', 404);
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
