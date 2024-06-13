import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubEntity } from './entities/club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';

import { SportEntity } from 'src/sport/entities/sport.entity';
import { SportService } from 'src/sport/sport.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(ClubEntity)
    private readonly clubRepository: Repository<ClubEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService,
    @InjectRepository(SportEntity)
    private readonly sportRepository: Repository<SportEntity>,
    private readonly sportService: SportService
  ) {}

  /**
   * Método para crear un nuevo los club
   * @param {CreateClubDto} createClubDto - Los datos del club a crear
   */
  public async create(createClubDto: CreateClubDto) {
    try {
      const { clubData, userId, sportId } = createClubDto;
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'User not found'
        });
      }
      const sport = await this.sportService.findById(sportId);
      if (!sport) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Sport not found'
        });
      }
      const newClub = await this.clubRepository.create(clubData);
      newClub.sports = [sport];
      newClub.sport = clubData.sport // Relate the club with the sport
      const saveClub = await this.clubRepository.save(newClub);
      if (!saveClub) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The new club is not created'
        });
      }

      await this.userRepository.save({
        ...user,
        club: saveClub
      });

      return saveClub;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  /**
   * Método para obtener todos los clubes
   */
  public async findAll() {
    try {
      const clubs: ClubEntity[] = await this.clubRepository.find({
        where: { isDelete: false }
      });
      if (clubs.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Clubs not found'
        });
      }
      return clubs;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  /**
   * Método para obtener un club por su ID
   * @param {string} id - El ID del club a buscar
   */
  public async findOne(id: string) {
    try {
      const club = await this.clubRepository
        .createQueryBuilder('club')
        .leftJoinAndSelect('club.sports', 'sports')
        .where({ id })
        .getOne();
      // Si no se encuentra el club, lanzar una excepción
      if (!club) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Club id: ${id} not found`
        });
      }
      // Devolver el club encontrado
      return club;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  /**
   * Método para actualizar un club por su ID
   * @param {string} id - El ID del club a actualizar
   * @param {UpdateClubDto} updateClubDto - Los datos del club a actualizar
   */
  public async update(id: string, updateClubDto: UpdateClubDto) {
    try {
      const club = await this.findOne(id);
      if (!club) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User id: ${id} not found`
        });
      }
      for (const key in updateClubDto) {
        club[key] = updateClubDto[key];
      }
      return await this.clubRepository.save(club);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async remove(id: string) {
    await this.clubRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }



  async findInfoRelation(clubId: number, relations: string[]): Promise<any> {
    try {
     const validRelations = this.validateRelations(relations);
 
     // Verificar si hay al menos una relación válida
     if (validRelations.length === 0) {
       throw new Error('No se han proporcionado relaciones válidas.');
     }
 
     // Construir objeto de opciones para la consulta
     const options: any = { where: { id: clubId }, relations: validRelations };
 console.log("options es", options)
     // Realizar la consulta del post con las relaciones especificadas
     const club = await this.clubRepository.findOne(options);
 
     if (!club) {
       throw new NotFoundException(`No se encontró ningún post con el ID ${clubId}.`);
     }
 
     return club;
    } catch (error) {
     console.log('este es el error ',error)
    }
   }
 
   private validateRelations(relations: string[]): string[] {
     const validRelations: string[] = [];
 
     // Definir relaciones válidas permitidas en la entidad Match
     const allowedRelations = ["sports", "positions" , "offers" , "sportman" , "user" ]; // Agregar más según sea necesario
 
     // Filtrar relaciones válidas
     relations.forEach(relation => {
       if (allowedRelations.includes(relation)) {
         validRelations.push(relation);
       }
     });
 
     return validRelations;
   }
}
