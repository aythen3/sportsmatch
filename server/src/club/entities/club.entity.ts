import { BaseEntity } from 'src/config/base.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne
} from 'typeorm';

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

  @Column({ nullable: true })
  sport: string;

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
  @JoinColumn()
  user: UserEntity;

  // @OneToMany(() => SportmanEntity, (sportman) => sportman.club, {
  //   nullable: true
  // })
  // sportman?: SportmanEntity[];

  @OneToMany(() => OfferEntity, (offer) => offer.club, { nullable: true })
  offers?: OfferEntity[];

  // @OneToMany(() => PositionEntity, (position) => position.club, {
  //   nullable: true
  // })
  // positions?: PositionEntity[];
  // Relación con MatchEntity
  @OneToMany(() => MatchEntity, (match) => match.club)
  matches: MatchEntity[];

  // @OneToMany(() => SportEntity, (sport) => sport.club, {
  //   nullable: true
  // })
  // sports?: SportEntity[];

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
