import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'match' })
export class MatchEntity extends BaseEntity {
  @ManyToMany(() => SportmanEntity, (sportman) => sportman.matches)
  @JoinTable()
  sportmen: SportmanEntity[];

  @ManyToOne(() => OfferEntity, (offer) => offer.match)
  offer: OfferEntity;

  @Column({ nullable: true })
  status: string;



  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;
}
  