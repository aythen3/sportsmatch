import { HttpException, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchEntity } from './entities/match.entity';
import { Repository } from 'typeorm';
import { OfferEntity } from 'src/offer/entities/offer.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private readonly matchRepository: Repository<MatchEntity>,
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>
  ) {}

  public async create(createMatchDto: CreateMatchDto) {
    const { offerId } = createMatchDto;
    // Buscar la oferta por su ID
    const offer = await this.offerRepository
      .createQueryBuilder('offer')
      .where({ id: offerId })
      .getOne();
    if (!offer) {
      throw new HttpException(`Offer with ID ${offerId} not found`, 404);
    }
    // Crear un match con los datos proporcionados y la oferta encontrada
    const newMatch = this.matchRepository.create({
      offer: offer // Asignar la oferta al partido
    });

    // Guardar el match en la base de datos
    const savedMatch = await this.matchRepository.save(newMatch);

    return savedMatch;
  }

  public async findAll() {
    return await this.matchRepository.find({ where: { isDelete: false } });
  }

  public async findOne(id: string) {
    const match = await this.matchRepository
      .createQueryBuilder('match')
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
