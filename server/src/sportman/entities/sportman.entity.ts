import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import {
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne
} from 'typeorm';

export class SportmanEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ['player', 'coach'],
    default: 'player'
  })
  type: 'player' | 'coach';

  @Column('simple-json')
  info: { [key: string]: any };

  @ManyToOne(() => ClubEntity, (club) => club.sportmen, { nullable: true })
  club?: ClubEntity;

  @OneToOne(() => SportEntity, (sport) => sport.sportman)
  @JoinColumn()
  sport: SportEntity;

  @OneToOne(() => SkillEntity, (skill) => skill.sportman)
  @JoinColumn()
  skill: SkillEntity;

  @ManyToOne(() => PositionEntity, (position) => position.sportmen)
  position: PositionEntity;

  @ManyToMany(() => MatchEntity)
  @JoinTable()
  matches: MatchEntity[];
}
