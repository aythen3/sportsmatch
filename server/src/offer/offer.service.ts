import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferEntity } from './entities/offer.entity';
import { Repository } from 'typeorm';
import { PositionService } from 'src/position/position.service';
import { MatchService } from 'src/match/match.service';
import { ClubService } from 'src/club/club.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>,

    private readonly positionService: PositionService,
    private readonly matchService: MatchService,
    private readonly clubService: ClubService
  ) {}

  /**
   * Crea una nueva oferta utilizando los datos proporcionados en el DTO.
   * @param {CreateOfferDto} { offerData, positionId, clubId } - Datos de la oferta a crear
   * @returns {OfferEntity} La nueva oferta creada
   */
  public async create(createOfferDto: CreateOfferDto) {
    try {
      const { offerData, positionId, clubId } = createOfferDto;

      const position = await this.positionService.findOne(positionId);
      if (!position) {
        throw new HttpException(`position ${position} not found`, 404);
      }

      const club = await this.clubService.findOne(clubId);
      if (!club) {
        throw new HttpException(`club ${club} not found`, 404);
      }

      const newOffer = await this.offerRepository.create({
        ...offerData,
        position: position,
        club: club
      });
      const saveOffer = await this.offerRepository.save(newOffer);
      if (!saveOffer) {
        throw new HttpException('the new sportman is not created', 501);
      }

      return saveOffer;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(query: UpdateOfferDto) {
    try {
      const where = { isDelete: false };
      if (query) {
        for (const key in query) {
          where[key] = query[key];
        }
      }
      const offer: OfferEntity[] = await this.offerRepository.find({
        where: where
      });
      if (offer.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Offer not found'
        });
      }
      return offer;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string) {
    try {
      const offer = await this.offerRepository
        .createQueryBuilder('offer')
        .leftJoinAndSelect('offer.position', 'position')
        .leftJoinAndSelect('offer.club', 'club')
        .where({ id })
        .getOne();
      // Si no se encuentra el offer, lanzar una excepción
      if (!offer) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Offer id: ${id} not found`
        });
      }
      // Devolver el offer encontrado
      return offer;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async update(id: string, updateOfferDto: UpdateOfferDto) {
    const offer = await this.findOne(id);
    const { offerData, positionId } = updateOfferDto;

    if (!offer) {
      throw new HttpException(`Offer with id ${id} not found`, 404);
    }
    for (const key in offerData) {
      offer[key] = offerData[key];
    }

    if (positionId) {
      const position = await this.positionService.findOne(positionId);
      offer.position = position;
    }
    const updatedOffer = await this.offerRepository.save(offer);

    return updatedOffer;
    //return await this.offerRepository.save(offer);
  }

  public async addMatch(id: string, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${updateOfferDto} offer`;
  }

  public async remove(id: string) {
    await this.offerRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }


  async addInscription(offerId: string, userId: string) {
   try {
    console.log("buscando la oferta")
    const offer = await this.offerRepository.findOne({where: {id:offerId}});
    if (!offer) {
      throw new NotFoundException('Offer not found.');
    }

    if (!Array.isArray(offer.inscriptions)) {
      offer.inscriptions = [];
    }

    offer.inscriptions.push(userId);
    console.log("aca se rompe")
    await this.offerRepository.save(offer);
   } catch (error) {
    console.log(error)
   }
  }

  async removeInscription(offerId: string, userId: string) {
    const offer = await this.offerRepository.findOne({where: {id:offerId}});
    if (!offer) {
      throw new NotFoundException('Offer not found.');
    }

    offer.inscriptions = offer.inscriptions.filter(id => id !== userId);
    await this.offerRepository.save(offer);
  }
}
