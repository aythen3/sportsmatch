import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

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

  @OneToOne(() => UserEntity)
  user: UserEntity;

  @OneToMany(() => SportmanEntity, (sportman) => sportman.club, {
    nullable: true
  })
  sportman?: SportmanEntity[];

  @OneToMany(() => OfferEntity, (offer) => offer.club, { nullable: true })
  offers?: OfferEntity[];

  @OneToMany(() => PositionEntity, (position) => position.club, {
    nullable: true
  })
  positions?: PositionEntity[];

  @OneToMany(() => SportEntity, (sport) => sport.club, {
    nullable: true
  })
  sports?: SportEntity[];
}
