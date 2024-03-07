import { BaseEntity } from 'src/config/base.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'skill' })
export class SkillEntity extends BaseEntity {
  @Column('simple-json')
  info: { [key: string]: any };

  @OneToOne(() => SportmanEntity, (sportman) => sportman.skill)
  sportman: SportmanEntity;

  @OneToOne(() => SportEntity, (sport) => sport.skill)
  sport: SportEntity;
}
