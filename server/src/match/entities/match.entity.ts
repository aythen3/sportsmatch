import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'match' })
export class MatchEntity extends BaseEntity {
  @ManyToMany(() => SportmanEntity, (sportman) => sportman.matches)
  @JoinTable()
  sportmen: SportmanEntity[];

  @ManyToOne(() => OfferEntity, (offer) => offer.match)
  offer: OfferEntity;
}
  