import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

export class OfferEntity extends BaseEntity {
  @OneToOne(() => PositionEntity)
  @JoinColumn()
  position: PositionEntity;

  @OneToMany(() => MatchEntity, (match) => match.offer)
  match: MatchEntity[];

  @ManyToOne(() => ClubEntity, (club) => club.offers, { nullable: true })
  club?: ClubEntity;
}
