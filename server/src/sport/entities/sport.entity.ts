import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity({ name: 'sport' })
export class SportEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  img?: string;

  @OneToMany(() => SportmanEntity, (sportman) => sportman.sport, {
    nullable: true
  })
  sportman: SportmanEntity[] | null;

  @OneToOne(() => SkillEntity, (skillEntity) => skillEntity.sport, {
    nullable: true
  })
  skill: SkillEntity | null;

  @OneToMany(() => PositionEntity, (position) => position.sport, {
    nullable: true
  })
  positions: PositionEntity[] | null;

  @ManyToOne(() => ClubEntity, (club) => club.sports, {
    nullable: true
  })
  club: ClubEntity | null;
}
