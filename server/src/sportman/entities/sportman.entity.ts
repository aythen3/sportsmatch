import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportEntity } from 'src/sport/entities/sport.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne
} from 'typeorm';

@Entity({ name: 'sportman' })
export class SportmanEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ['player', 'coach'],
    default: 'player'
  })
  type: 'player' | 'coach';

  @Column('simple-json')
  info: { [key: string]: any };

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => ClubEntity, (club) => club.sportman, { nullable: true })
  club?: ClubEntity;

  @ManyToOne(() => SportEntity, (sport) => sport.sportman, {
    nullable: true
  })
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
