import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'club' })
export class ClubEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  field: string;

  @Column()
  year: number;

  @Column()
  capacity: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  img_perfil?: string;

  @Column({ nullable: true })
  img_front?: string;

  @OneToMany(() => SportmanEntity, (sportman) => sportman.club, {
    nullable: true
  })
  sportmen?: SportmanEntity[];

  @OneToMany(() => OfferEntity, (offer) => offer.club, { nullable: true })
  offers?: OfferEntity[];

  @OneToMany(() => PositionEntity, (position) => position.club, {
    nullable: true
  })
  positions?: PositionEntity[];
}
