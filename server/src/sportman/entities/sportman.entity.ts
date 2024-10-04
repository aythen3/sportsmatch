import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { MatchEntity } from 'src/match/entities/match.entity';

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
    enum: ['player', 'coach', 'invitado'],
    default: 'player'
  })
  type: 'player' | 'coach' | 'invitado';

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

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  // @ManyToOne(() => ClubEntity, (club) => club.sportman, { nullable: true })
  // club?: ClubEntity;

  // @ManyToOne(() => SportEntity, (sport) => sport.sportman, {
  //   nullable: true
  // })
  // sport: SportEntity;

  // @OneToOne(() => SkillEntity, (skill) => skill.sportman)
  // @JoinColumn()
  // skill: SkillEntity;

  // @ManyToOne(() => PositionEntity, (position) => position.sportmen)
  // position: PositionEntity;

  @ManyToMany(() => MatchEntity)
  @JoinTable()
  matches: MatchEntity[];
}
