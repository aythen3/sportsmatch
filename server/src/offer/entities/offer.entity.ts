import { IsArray, IsBoolean, IsInt, IsString, Max, Min } from 'class-validator';
import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany
} from 'typeorm';

@Entity({ name: 'offer' })
export class OfferEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ['Male', 'Female', 'Otro']
  })
  @Column({ nullable: true })
  posit: string | null;

  @Column({ nullable: true })
  paused: boolean | null;

  @Column()
  @IsString()
  sexo: string;

  @Column()
  @IsString()
  category: string;

  @Column({ nullable: true })
  @IsString()
  province: string | null;

  @Column({ type: 'int', nullable: true })
  @IsInt() // Validador para asegurar que sea un número entero
  @Min(0) // Validador para asegurar que sea mayor o igual a 0
  @Max(10) // Validador para asegurar que sea menor o igual a 10
  urgency: number;

  @Column()
  @IsBoolean()
  retribution: boolean;

  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  matches: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;

  @OneToMany(() => MatchEntity, (match) => match.offerId, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  match: MatchEntity[];

  @ManyToOne(() => ClubEntity, (club) => club.offers, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  club?: ClubEntity;

  @Column({ type: 'simple-array', nullable: true })
  @IsArray()
  inscriptions: string[];

  // Relación con los usuarios inscritos
  @ManyToMany(() => UserEntity, (user) => user.offers, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  @JoinTable() // Necesario para la relación bidireccional
  usersInscriptions: UserEntity[];
}
