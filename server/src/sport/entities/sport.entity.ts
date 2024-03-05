import { BaseEntity } from 'src/config/base.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { OneToOne } from 'typeorm';

export class SportEntity extends BaseEntity {
  @OneToOne(() => SportmanEntity, (sportman) => sportman.sport)
  sportman: SportmanEntity;
}
