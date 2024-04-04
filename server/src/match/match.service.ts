import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchEntity } from './entities/match.entity';
import { Repository } from 'typeorm';
import { OfferEntity } from 'src/offer/entities/offer.entity';

import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private readonly matchRepository: Repository<MatchEntity>,
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>,
    @InjectRepository(SportmanEntity)
    private readonly sportmanRepository: Repository<SportmanEntity>
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
      return savedMatch;
    } catch (error) {}
  }

  public async findAll() {
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
}
