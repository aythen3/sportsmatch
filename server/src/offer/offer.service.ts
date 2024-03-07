import { HttpException, Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferEntity } from './entities/offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>
  ) {}

  public async create(createOfferDto: CreateOfferDto) {
    const { offerData } = createOfferDto;
    const newOffer = await this.offerRepository.create(offerData);
    const saveOffer = await this.offerRepository.save(newOffer);
    if (!saveOffer) {
      throw new HttpException('the new sportman is not created', 501);
    }
    return saveOffer;
  }

  public async findAll() {
    return await this.offerRepository.find({ where: { isDelete: false } });
  }

  public async findOne(id: string) {
    const offer = await this.offerRepository
      .createQueryBuilder('offer')
      .where({ id })
      .getOne();

    // Si no se encuentra el offer, lanzar una excepción
    if (!offer)
      throw new HttpException(`Offer con ID ${id} no encontrado`, 404);

    // Devolver el offer encontrado
    return offer;
  }

  public async update(id: string, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${updateOfferDto} offer`;
  }

  public async remove(id: string) {
    await this.offerRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
