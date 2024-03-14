import { HttpException, Injectable } from '@nestjs/common';
import { CreateSportmanDto } from './dto/create-sportman.dto';
import { UpdateSportmanDto } from './dto/update-sportman.dto';
import { SportmanEntity } from './entities/sportman.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

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
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new HttpException('the user not found', 404);
    }
    const newSportman = await this.sportmanRepository.create(sportmanData);
    const saveSportman = await this.sportmanRepository.save(newSportman);
    if (!saveSportman) {
      throw new HttpException('the new sportman is not created', 501);
    }
    await this.userRepository.save({
      ...user,
      sportman: saveSportman
    });

    return saveSportman;
  }
  /**
   * Método para obtener todos los Deportistas
   */
  public async findAll() {
    return await this.sportmanRepository.find({ where: { isDelete: false } });
  }

  public async findOne(id: string) {
    const sportman = await this.sportmanRepository
      .createQueryBuilder('sportman')
      .where({ id })
      .getOne();

    // Si no se encuentra el sportman, lanzar una excepción
    if (!sportman)
      throw new HttpException(`sportman con ID ${id} no encontrado`, 404);

    // Devolver el sportman encontrado
    return sportman;
  }

  /**
   * Método para actualizar un deportista por su ID
   * @param {string} id - El ID del deportista a actualizar
   * @param {UpdateSportmanDto} updateSportmanDto - Los datos del deportista a actualizar
   */
  public async update(id: string, updateSportmanDto: UpdateSportmanDto) {
    const { sportmanData } = updateSportmanDto;
    const sportman = await this.findOne(id);
    if (!sportman) {
      throw new HttpException(`Club con id ${id} no encontrado`, 404);
    }
    for (const key in sportmanData) {
      if (key === 'info') {
        sportman.info = { ...sportman.info, ...sportmanData };
      } else {
        sportman[key] = sportmanData[key];
      }
    }
    return await this.sportmanRepository.save(sportman);
  }

  public async remove(id: string) {
    await this.sportmanRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
