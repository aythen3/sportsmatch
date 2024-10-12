import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'match' })
export class MatchEntity extends BaseEntity {
  @ManyToMany(() => SportmanEntity, (sportman) => sportman.matches, {
    onDelete: 'CASCADE'
  })
  @JoinTable()
  sportmenId: SportmanEntity[];

  @ManyToMany(() => ClubEntity, (club) => club.matches, { onDelete: 'CASCADE' })
  @JoinTable()
  clubId: SportmanEntity[];

  @ManyToOne(() => OfferEntity, (offer) => offer.match, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  offerId: OfferEntity;

  // Relación con ClubEntity
  @ManyToOne(() => ClubEntity, (club) => club.matches, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  club: ClubEntity;

  // Relación con UserEntity
  @ManyToOne(() => UserEntity, (user) => user.matches, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  user: UserEntity;

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
