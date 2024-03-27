import { HttpException, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchEntity } from './entities/match.entity';
import { Repository } from 'typeorm';
import { OfferEntity } from 'src/offer/entities/offer.entity';

import { SportmanEntity } from 'src/sportman/entities/sportman.entity';

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
    const { offerId, sportmanId } = createMatchDto;
    // console.log(sportmanId);
    // Buscar la oferta por su ID
    const offer = await this.offerRepository
      .createQueryBuilder('offer')
      .where({ id: offerId })
      .getOne();
    // console.log(offer);
    if (!offer) {
      throw new HttpException(`Offer with ID ${offerId} not found`, 404);
    }

    const sportman = await this.sportmanRepository
      .createQueryBuilder('sportman')
      .where({ id: sportmanId })
      .getOne();
    console.log(sportman);
    if (!sportman) {
      throw new HttpException(`Sportman with ID ${sportmanId} not found`, 404);
    }
    // Crear un partido y asignar la oferta
    const newMatch = new MatchEntity();
    newMatch.offer = offer;

    // Si la relación es muchos a muchos, necesitas agregar el deportista al arreglo de deportistas del partido
    sportman.matches = [newMatch];

    // Guardar el partido en la base de datos
    const savedMatch = await this.matchRepository.save(newMatch);
    await this.sportmanRepository.save(sportman);
    return savedMatch;
  }

  public async findAll() {
    return await this.matchRepository.find({ where: { isDelete: false } });
  }

  public async findOne(id: string) {
    const match = await this.matchRepository
      .createQueryBuilder('match')
      //.leftJoinAndSelect('match.sportmen', 'sportmen')
      .leftJoinAndSelect('match.offer', 'offer')
      .where({ id })
      .getOne();

    // Si no se encuentra el match, lanzar una excepción
    if (!match)
      throw new HttpException(`Match con ID ${id} no encontrado`, 404);

    // Devolver el match encontrado
    return match;
  }

  public async update(id: string, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${updateMatchDto} match`;
  }

  public async remove(id: string) {
    await this.matchRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
