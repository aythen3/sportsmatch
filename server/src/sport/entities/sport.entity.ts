import { IsString } from 'class-validator';
import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity({ name: 'sport' })
export class SportEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  @IsString()
  name: string;

  @Column({ type: 'varchar', nullable: true })
  @IsString()
  img?: string;

  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;

  // @OneToMany(() => SportmanEntity, (sportman) => sportman.sport, {
  //   nullable: true
  // })
  // sportman: SportmanEntity[] | null;

  @OneToOne(() => SkillEntity, (skillEntity) => skillEntity.sport, {
    nullable: true
  })
  skill: SkillEntity | null;

  @OneToMany(() => PositionEntity, (position) => position.sport, {
    nullable: true
  })
  positions: PositionEntity[] | null;

  // @ManyToOne(() => ClubEntity, (club) => club.sports, {
  //   nullable: true
  // })
  // club: ClubEntity | null;
}
