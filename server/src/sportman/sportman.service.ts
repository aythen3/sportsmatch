import { Injectable } from '@nestjs/common';
import { CreateSportmanDto } from './dto/create-sportman.dto';
import { UpdateSportmanDto } from './dto/update-sportman.dto';
import { SportmanEntity } from './entities/sportman.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class SportmanService {
  constructor(
    @InjectRepository(SportmanEntity)
    private readonly sportmanRepository: Repository<SportmanEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService
  ) {}

  public async create(createSportmanDto: CreateSportmanDto) {
    const { sportmanData, userId } = createSportmanDto;
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User with id: ${userId} not found`
        });
      }
      const newSportman = await this.sportmanRepository.create(sportmanData);
      const saveSportman = await this.sportmanRepository.save(newSportman);
      if (!saveSportman) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `the new sportman is not created`
        });
      }
      await this.userRepository.save({
        ...user,
        sportman: saveSportman
      });

      return saveSportman;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  /**
   * Método para obtener todos los Deportistas
   */
  public async findAll() {
    try {
      const sportmans = await this.sportmanRepository.find({
        where: { isDelete: false }
      });
      if (sportmans.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Sportmans not found'
        });
      }
      return sportmans;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string) {
    try {
      const sportman = await this.sportmanRepository
        .createQueryBuilder('sportman')
        .where({ id })
        .getOne();

      // Si no se encuentra el sportman, lanzar una excepción
      if (!sportman) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Sportman id: ${id} not found`
        });
      }

      // Devolver el sportman encontrado
      return sportman;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  /**
   * Método para actualizar un deportista por su ID
   * @param {string} id - El ID del deportista a actualizar
   * @param {UpdateSportmanDto} updateSportmanDto - Los datos del deportista a actualizar
   */
  public async update(id: string, updateSportmanDto: UpdateSportmanDto) {
    try {
      const { sportmanData } = updateSportmanDto;
      const sportman = await this.findOne(id);
      if (!sportman) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Sportman id: ${id} not found`
        });
      }
      for (const key in sportmanData) {
        if (key === 'info') {
          sportman.info = { ...sportman.info, ...sportmanData };
        } else {
          sportman[key] = sportmanData[key];
        }
      }
      return await this.sportmanRepository.save(sportman);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async remove(id: string) {
    try {
      await this.sportmanRepository.update(id, { isDelete: true });
      const sportman: SportmanEntity = await this.findOne(id);
      if (!sportman) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User id: ${id} not found`
        });
      }
      return sportman;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
