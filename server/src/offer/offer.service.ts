import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferEntity } from './entities/offer.entity';
import { Repository } from 'typeorm';
import { ClubService } from 'src/club/club.service';
import { ErrorManager } from 'src/utils/error.manager';
import { UserEntity } from 'src/user/entities/user.entity';
import { ClubEntity } from 'src/club/entities/club.entity';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ClubEntity)
    private readonly clubRepository: Repository<ClubEntity>,
    private readonly clubService: ClubService
  ) {}

  /**
   * Crea una nueva oferta utilizando los datos proporcionados en el DTO.
   * @param {CreateOfferDto} { offerData, positionId, clubId } - Datos de la oferta a crear
   * @returns {OfferEntity} La nueva oferta creada
   */
  public async create(createOfferDto: CreateOfferDto) {
    try {
      const { offerData, clubId } = createOfferDto;

      // Buscar el club
      const club = await this.clubRepository.findOne({
        where: { id: clubId },
        relations: ['offers'] // Incluimos las ofertas existentes para poder actualizarlas
      });
      if (!club) {
        throw new HttpException(`Club with ID ${clubId} not found`, 404);
      }

      // Crear una nueva oferta con los datos proporcionados y el club asociado
      const newOffer = this.offerRepository.create({
        ...offerData,
        club: club
      });

      // Guardar la nueva oferta en la base de datos
      const savedOffer = await this.offerRepository.save(newOffer);
      if (!club.offers) {
        club.offers = [];
      }
      // Asociar la nueva oferta al club y guardar el club actualizado

      // Agregar la nueva oferta a la lista de ofertas del club
      club.offers.push(savedOffer);
      await this.clubRepository.save(club); // Guardar el club con la nueva oferta

      // Guardar los cambios en el club

      return savedOffer;
    } catch (error) {
      console.error('Error creating offer:', error);
      throw new HttpException('Error creating offer', 500);
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
        relations: ['club', 'usersInscriptions'] // Incluir la relación con el club
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
    // if (updateOfferDto.position !== undefined) {
    //   offer.position = updateOfferDto.position;
    // }
    if (updateOfferDto.club !== undefined) {
      offer.club = updateOfferDto.club;
    }
    if (updateOfferDto.inscriptions !== undefined) {
      offer.inscriptions = updateOfferDto.inscriptions;
    }
    if (updateOfferDto.paused !== undefined) {
      offer.paused = updateOfferDto.paused;
    }
    if (updateOfferDto.posit !== undefined) {
      offer.posit = updateOfferDto.posit;
    }

    const updatedOffer = await this.offerRepository.save(offer);

    console.log('updatedOffer: ', updatedOffer);

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
      console.log('Buscando la oferta');

      // Buscar la oferta con la relación de usuarios inscritos
      const offer = await this.offerRepository.findOne({
        where: { id: offerId },
        relations: ['usersInscriptions'] // Asegurarse de incluir la relación
      });

      if (!offer) {
        throw new NotFoundException('Offer not found.');
      }

      console.log('Buscando el usuario');

      // Buscar el usuario por su ID
      const user = await this.userRepository.findOne({ where: { id: userId } });

      if (!user) {
        throw new NotFoundException('User not found.', userId);
      }

      // Verificar si el usuario ya está inscrito
      const isUserAlreadyInscribed = offer.usersInscriptions.some(
        (inscribedUser) => inscribedUser.id === userId
      );

      if (isUserAlreadyInscribed) {
        throw new Error('User is already inscribed in this offer.');
      }

      // Agregar el usuario a la oferta
      offer.usersInscriptions.push(user);

      // Guardar la oferta con el usuario agregado
      await this.offerRepository.save(offer);

      console.log('Inscripción exitosa');
    } catch (error) {
      console.log('Error en la inscripción:', error.message);
      throw new Error(error.message);
    }
  }

  async removeInscription(offerId: string, userId: string) {
    try {
      console.log('Buscando la oferta para eliminar la inscripción');

      // Buscar la oferta con la relación de usuarios inscritos
      const offer = await this.offerRepository.findOne({
        where: { id: offerId },
        relations: ['usersInscriptions'] // Asegurarse de incluir la relación
      });

      if (!offer) {
        throw new NotFoundException('Offer not found.');
      }

      console.log('Buscando el usuario en la oferta');

      // Verificar si el usuario está inscrito
      const isUserInscribed = offer.usersInscriptions.some(
        (inscribedUser) => inscribedUser.id === userId
      );

      if (!isUserInscribed) {
        throw new Error('User is not inscribed in this offer.');
      }

      // Eliminar la inscripción del usuario
      offer.usersInscriptions = offer.usersInscriptions.filter(
        (inscribedUser) => inscribedUser.id !== userId
      );

      // Guardar la oferta con la inscripción eliminada
      await this.offerRepository.save(offer);

      console.log('Inscripción eliminada correctamente');
    } catch (error) {
      console.log('Error al eliminar la inscripción:', error.message);
      throw new Error(error.message);
    }
  }

  async findInfoRelation(offerId: number, relations: string[]): Promise<any> {
    try {
      const validRelations = this.validateRelations(relations);

      // Verificar si hay al menos una relación válida
      if (validRelations.length === 0) {
        throw new Error('No se han proporcionado relaciones válidas.');
      }

      // Construir objeto de opciones para la consulta
      const options: any = {
        where: { id: offerId },
        relations: validRelations
      };
      console.log('options es', options);
      // Realizar la consulta del post con las relaciones especificadas
      const offer = await this.offerRepository.findOne(options);

      if (!offer) {
        throw new NotFoundException(
          `No se encontró ningún post con el ID ${offerId}.`
        );
      }

      return offer;
    } catch (error) {
      console.log('este es el error ', error);
    }
  }

  private validateRelations(relations: string[]): string[] {
    const validRelations: string[] = [];

    // Definir relaciones válidas permitidas en la entidad Match
    const allowedRelations = ['club', 'match', 'position']; // Agregar más según sea necesario

    // Filtrar relaciones válidas
    relations.forEach((relation) => {
      if (allowedRelations.includes(relation)) {
        validRelations.push(relation);
      }
    });

    return validRelations;
  }
}
