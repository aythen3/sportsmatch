import { BaseEntity } from 'src/config/base.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { OneToMany, OneToOne } from 'typeorm';

export class SportEntity extends BaseEntity {
  @OneToOne(() => SportmanEntity, (sportman) => sportman.sport)
  sportman: SportmanEntity;

  @OneToOne(() => SkillEntity, (skillEntity) => skillEntity.sport)
  skill: SkillEntity;

  @OneToMany(() => PositionEntity, (position) => position.sport)
  positions: PositionEntity[];
}
