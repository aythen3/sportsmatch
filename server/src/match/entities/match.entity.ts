import { BaseEntity } from 'src/config/base.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { ManyToMany } from 'typeorm';

export class MatchEntity extends BaseEntity {
  @ManyToMany(() => SportmanEntity)
  sportmen: SportmanEntity[];
}
