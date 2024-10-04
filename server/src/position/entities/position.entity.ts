import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity({ name: 'position' })
export class PositionEntity extends BaseEntity {
  @Column()
  name: string;
  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;
  // @ManyToOne(() => ClubEntity, (club) => club.positions, { nullable: true })
  // club?: ClubEntity;

  // @OneToMany(() => OfferEntity, (offer) => offer.position, { nullable: true })
  // offer: OfferEntity[];

  @OneToOne(() => SportmanEntity, { nullable: true })
  sportmen: SportmanEntity;

  @ManyToOne(() => SportEntity, (sport) => sport.positions)
  sport: SportEntity;
}
