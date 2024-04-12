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

  public async create(createMatchDto: CreateMatchDto) {
    try {
      const { offerId, sportmanId } = createMatchDto;
      // console.log(sportmanId);
      // Buscar la oferta por su ID
      const offer = await this.offerRepository
        .createQueryBuilder('offer')
        .where({ id: offerId })
        .getOne();
      // console.log(offer);
      if (!offer) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Offer id: ${offerId} not found`
        });
      }

      const sportman = await this.sportmanRepository
        .createQueryBuilder('sportman')
        .where({ id: sportmanId })
        .leftJoinAndSelect('sportman.user', 'user')
        .getOne();
      console.log(sportman);
      if (!sportman) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Sportman id: ${sportmanId} not found`
        });
      }


   
      // Crear un match y asignar la oferta
      const newMatch = new MatchEntity();
      newMatch.offer = offer;
      newMatch.sportmen = [sportman];
      // Si la relación es muchos a muchos, necesitas agregar el deportista al arreglo de deportistas del match
      sportman.matches = [newMatch];
      
      // Guardar el match en la base de datos
      const savedMatch = await this.matchRepository.save(newMatch);
      if (!savedMatch) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Match not found`
        });
      }
      await this.sportmanRepository.save(sportman);
      const newNotification: CreateNotificationDto = {
        title: 'Nuevo Match',
        message: '',
        date: new Date(),
        recipientId: sportman?.user.id
      };
      console.log(newNotification);
      const notificationCreated =
        await this.notificationServices.createService(newNotification);
      return { savedMatch, notificationCreated };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
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

  public async update(id: string, updateMatchDto: UpdateMatchDto) {
    try {
      console.log("hola")
      return `This action updates a #${updateMatchDto} match`;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
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

