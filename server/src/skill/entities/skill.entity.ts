import { BaseEntity } from 'src/config/base.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'skill' })
export class SkillEntity extends BaseEntity {
  @Column('simple-json')
  info: { [key: string]: any };

  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;

  @OneToOne(() => SportmanEntity, (sportman) => sportman.skill)
  sportman: SportmanEntity;

  @OneToOne(() => SportEntity, (sport) => sport.skill)
  sport: SportEntity;
}
