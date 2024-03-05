import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { ManyToOne } from 'typeorm';

export class OfferEntity extends BaseEntity {
  @ManyToOne(() => ClubEntity, (club) => club.offers, { nullable: true })
  club?: ClubEntity;
}
