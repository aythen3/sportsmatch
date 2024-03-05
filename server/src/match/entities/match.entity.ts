import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ManyToMany, ManyToOne } from 'typeorm';

export class MatchEntity extends BaseEntity {
  @ManyToMany(() => SportmanEntity)
  sportmen: SportmanEntity[];

  @ManyToOne(() => OfferEntity, (offer) => offer.match)
  offer: OfferEntity;
}
