import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ManyToOne, OneToMany } from 'typeorm';

export class PositionEntity extends BaseEntity {
  @ManyToOne(() => ClubEntity, (club) => club.positions, { nullable: true })
  club?: ClubEntity;

  @OneToMany(() => SportmanEntity, (sportman) => sportman.position)
  sportmen: SportmanEntity[];
}
