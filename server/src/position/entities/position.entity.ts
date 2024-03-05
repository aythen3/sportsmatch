import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ManyToOne, OneToOne } from 'typeorm';

export class PositionEntity extends BaseEntity {
  @ManyToOne(() => ClubEntity, (club) => club.positions, { nullable: true })
  club?: ClubEntity;

  @ManyToOne(() => OfferEntity, (offer) => offer.position)
  offer: OfferEntity;

  @OneToOne(() => SportmanEntity)
  sportmen: SportmanEntity;

  @ManyToOne(() => SportEntity, (sport) => sport.positions)
  sport: SportEntity;
}
