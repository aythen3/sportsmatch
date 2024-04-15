import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchEntity } from './entities/match.entity';
import { Repository } from 'typeorm';
import { OfferEntity } from 'src/offer/entities/offer.entity';

import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ErrorManager } from 'src/utils/error.manager';

import { NotificationService } from 'src/notification/notification.service';
import { CreateNotificationDto } from 'src/notification/dto/create-notification.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private readonly matchRepository: Repository<MatchEntity>,
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>,
    @InjectRepository(SportmanEntity)
    private readonly sportmanRepository: Repository<SportmanEntity>,
    private readonly notificationServices: NotificationService
  ) {}

  async create(createMatchDto: CreateMatchDto): Promise<MatchEntity> {
    const newMatch = new MatchEntity();

    Object.assign(newMatch, createMatchDto);

    return await this.matchRepository.save(newMatch);
  }


  public async findAll() {
    try {
      const matchs = await this.matchRepository.find({
        where: { isDelete: false }
      });
      if (matchs.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Matchs not found'
        });
      }
      return matchs;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string) {
    try {
      const match = await this.matchRepository
        .createQueryBuilder('match')
        //.leftJoinAndSelect('match.sportmen', 'sportmen')
        .leftJoinAndSelect('match.offer', 'offer')
        .where({ id })
        .getOne();
      // Si no se encuentra el match, lanzar una excepción
      if (!match) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Match not found'
        });
      }
      // Devolver el match encontrado
      return match;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async update(id: string, updateMatchDto: UpdateMatchDto): Promise<MatchEntity> {
    const match = await this.matchRepository.findOne({where: {id:id}});

    if (!match) {
      throw new Error('Match not found');
    }

    // Actualizar las propiedades según los datos del DTO

    if (updateMatchDto.status !== undefined) {
      match.status = updateMatchDto.status;
    if (updateMatchDto.prop1 !== undefined) {
      match.prop1 = updateMatchDto.prop1;
    }
    if (updateMatchDto.prop2 !== undefined) {
      match.prop2 = updateMatchDto.prop2;
    }
    if (updateMatchDto.prop3 !== undefined) {
      match.prop3 = updateMatchDto.prop3;
    }
    if (updateMatchDto.prop4 !== undefined) {
      match.prop4 = updateMatchDto.prop4;
    }

    // Guardar los cambios en la base de datos
    return this.matchRepository.save(match);
  }
}

  public async remove(id: string) {
    try {
      await this.matchRepository.update(id, { isDelete: true });
      const match: MatchEntity = await this.findOne(id);
      if (!match) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User id: ${id} not found`
        });
      }

      return match;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }


  async findInfoRelation(matchId: number, relations: string[]): Promise<any> {
   try {
    const validRelations = this.validateRelations(relations);

    // Verificar si hay al menos una relación válida
    if (validRelations.length === 0) {
      throw new Error('No se han proporcionado relaciones válidas.');
    }

    // Construir objeto de opciones para la consulta
    const options: any = { where: { id: matchId }, relations: validRelations };
console.log("options es", options)
    // Realizar la consulta del post con las relaciones especificadas
    const match = await this.matchRepository.findOne(options);

    if (!match) {
      throw new NotFoundException(`No se encontró ningún post con el ID ${matchId}.`);
    }

    return match;
   } catch (error) {
    console.log('este es el error ',error)
   }
  }

  private validateRelations(relations: string[]): string[] {
    const validRelations: string[] = [];

    // Definir relaciones válidas permitidas en la entidad Match
    const allowedRelations = ['offer', 'sportmen']; // Agregar más según sea necesario

    // Filtrar relaciones válidas
    relations.forEach(relation => {
      if (allowedRelations.includes(relation)) {
        validRelations.push(relation);
      }
    });

    return validRelations;
  }


  async findAllByUserId(userId: string): Promise<MatchEntity[]> {
    const matches = await this.matchRepository
      .createQueryBuilder('match')
      .innerJoin('match.sportmen', 'sportman')
      .where('sportman.id = :userId', { userId })
      .getMany();

    if (!matches) {
      throw new NotFoundException('Matches not found.');
    }

    return matches;
  }
  
}

