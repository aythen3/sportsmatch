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
import { PositionEntity } from 'src/position/entities/position.entity';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>,
    private readonly clubService: ClubService,
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
  ) {}

  /**
   * Crea una nueva oferta utilizando los datos proporcionados en el DTO.
   * @param {CreateOfferDto} { offerData, positionId, clubId } - Datos de la oferta a crear
   * @returns {OfferEntity} La nueva oferta creada
   */
  public async create(createOfferDto: CreateOfferDto) {
    try {
      const { offerData, position:positionId, clubId } = createOfferDto;

      // const position = await this.positionService.findOne(positionId);
      const position = await this.positionRepository.findOne({where:{id:positionId}})

      if (!position) {
         return(`position ${position} not found`);
      }

      const club = await this.clubService.findOne(clubId);
      if (!club) {
      return (`club ${club} not found`);
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

  async findAll(query: UpdateOfferDto) {
    try {
      const where = { isDelete: false };
      if (query) {
        for (const key in query) {
          where[key] = query[key];
        }
      }

      const offers: OfferEntity[] = await this.offerRepository.find({
        where,
        relations: ['club'] // Incluir la relación con el club
      });

      if (offers.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Offer not found'
        });
      }

      // Mapear los resultados para incluir el clubId
      const offersWithClubId = offers.map((offer) => ({
        ...offer,
        clubId: offer.club.id // Agregar el clubId al objeto offer
      }));

      return offersWithClubId;
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

  // public async update(id: string, updateOfferDto: UpdateOfferDto) {
  //   const offer = await this.findOne(id);
  //   const { offerData, positionId } = updateOfferDto;

  //   if (!offer) {
  //     return(`Offer with id ${id} not found`);
  //   }
  //   for (const key in offerData) {
  //     offer[key] = offerData[key];
  //   }

  //   if (positionId) {
  //     // const position = await this.positionService.findOne(positionId);
  //     const position = await this.positionRepository.findOne({where:{id:positionId}})
  //     console.log("esto es positiion",position)
  //     offer.position = position;
  //   }
  //   const updatedOffer = await this.offerRepository.save(offer);

  //   return updatedOffer;
  //   //return await this.offerRepository.save(offer);
  // }

  async update(id: string, updateOfferDto: UpdateOfferDto) {
    const offer = await this.offerRepository.findOne({ where: { id: id } });
  
    if (!offer) {
      throw new Error(`Offer with id ${id} not found`);
    }
  
    if (updateOfferDto.sexo !== undefined) {
      offer.sexo = updateOfferDto.sexo;
    }
    if (updateOfferDto.category !== undefined) {
      offer.category = updateOfferDto.category;
    }
    if (updateOfferDto.urgency !== undefined) {
      offer.urgency = updateOfferDto.urgency;
    }
    if (updateOfferDto.retribution !== undefined) {
      offer.retribution = updateOfferDto.retribution;
    }
    if (updateOfferDto.prop1 !== undefined) {
      offer.prop1 = updateOfferDto.prop1;
    }
    if (updateOfferDto.prop2 !== undefined) {
      offer.prop2 = updateOfferDto.prop2;
    }
    if (updateOfferDto.matches !== undefined) {
      offer.matches = updateOfferDto.matches;
    }
    if (updateOfferDto.prop4 !== undefined) {
      offer.prop4 = updateOfferDto.prop4;
    }
    if (updateOfferDto.position !== undefined) {
      offer.position = updateOfferDto.position;
    }
    if (updateOfferDto.club !== undefined) {
      offer.club = updateOfferDto.club;
    }
    if (updateOfferDto.inscriptions !== undefined) {
      offer.inscriptions = updateOfferDto.inscriptions;
    }
  
    const updatedOffer = await this.offerRepository.save(offer);
  
    return updatedOffer;
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
      console.log('buscando la oferta');
      const offer = await this.offerRepository.findOne({
        where: { id: offerId }
      });
      if (!offer) {
        throw new NotFoundException('Offer not found.');
      }

      if (!Array.isArray(offer.inscriptions)) {
        offer.inscriptions = [];
      }

      offer.inscriptions.push(userId);
      console.log('aca se rompe');
      await this.offerRepository.save(offer);
    } catch (error) {
      console.log(error);
    }
  }

  async removeInscription(offerId: string, userId: string) {
    const offer = await this.offerRepository.findOne({
      where: { id: offerId }
    });
    if (!offer) {
      throw new NotFoundException('Offer not found.');
    }

    offer.inscriptions = offer.inscriptions.filter((id) => id !== userId);
    await this.offerRepository.save(offer);
  }



  async findInfoRelation(offerId: number, relations: string[]): Promise<any> {
    try {
     const validRelations = this.validateRelations(relations);
 
     // Verificar si hay al menos una relación válida
     if (validRelations.length === 0) {
       throw new Error('No se han proporcionado relaciones válidas.');
     }
 
     // Construir objeto de opciones para la consulta
     const options: any = { where: { id: offerId }, relations: validRelations };
 console.log("options es", options)
     // Realizar la consulta del post con las relaciones especificadas
     const offer = await this.offerRepository.findOne(options);
 
     if (!offer) {
       throw new NotFoundException(`No se encontró ningún post con el ID ${offerId}.`);
     }
 
     return offer;
    } catch (error) {
     console.log('este es el error ',error)
    }
   }
 
   private validateRelations(relations: string[]): string[] {
     const validRelations: string[] = [];
 
     // Definir relaciones válidas permitidas en la entidad Match
     const allowedRelations = ["club" , "match" , "position" ]; // Agregar más según sea necesario
 
     // Filtrar relaciones válidas
     relations.forEach(relation => {
       if (allowedRelations.includes(relation)) {
         validRelations.push(relation);
       }
     });
 
     return validRelations;
   }
}
