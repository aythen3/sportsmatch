import { HttpException, Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubEntity } from './entities/club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(ClubEntity)
    private readonly clubRepository: Repository<ClubEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService
  ) {}

  /**
   * Método para crear un nuevo los club
   * @param {CreateClubDto} createClubDto - Los datos del club a crear
   */
  public async create(createClubDto: CreateClubDto) {
    const { clubData, userId } = createClubDto;
    console.log('CLUBBB', createClubDto);
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new HttpException('the user not found', 404);
    }
    const newClub = await this.clubRepository.create(clubData);
    const saveClub = await this.clubRepository.save(newClub);
    if (!saveClub) {
      throw new HttpException('the new club is not created', 501);
    }
    await this.userRepository.save({
      ...user,
      club: saveClub
    });

    return saveClub;
  }
  /**
   * Método para obtener todos los clubes
   */
  public async findAll() {
    return await this.clubRepository.find({ where: { isDelete: false } });
  }

  /**
   * Método para obtener un club por su ID
   * @param {string} id - El ID del club a buscar
   */
  public async findOne(id: string) {
    const club = await this.clubRepository
      .createQueryBuilder('club')
      .where({ id })
      .getOne();

    // Si no se encuentra el club, lanzar una excepción
    if (!club) throw new HttpException(`Club con ID ${id} no encontrado`, 404);

    // Devolver el club encontrado
    return club;
  }
  /**
   * Método para actualizar un club por su ID
   * @param {string} id - El ID del club a actualizar
   * @param {UpdateClubDto} updateClubDto - Los datos del club a actualizar
   */
  public async update(id: string, updateClubDto: UpdateClubDto) {
    const club = await this.findOne(id);
    if (!club) {
      throw new HttpException(`Club con id ${id} no encontrado`, 404);
    }
    for (const key in updateClubDto) {
      club[key] = updateClubDto[key];
    }
    return await this.clubRepository.save(club);
  }

  public async remove(id: string) {
    await this.clubRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
