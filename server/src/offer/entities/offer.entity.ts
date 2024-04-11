import { IsArray, IsBoolean, IsInt, IsString, Max, Min } from 'class-validator';
import { ClubEntity } from 'src/club/entities/club.entity';
import { BaseEntity } from 'src/config/base.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'offer' })
export class OfferEntity extends BaseEntity {

  @Column({
    type: 'enum',
    enum: ['Male', 'Female', 'Otro']
  })
  sexo: 'Male' | 'Female' | 'Otro';

  @Column()
  @IsString()
  category: string;

  @Column({ type: 'int', nullable: true })
  @IsInt() // Validador para asegurar que sea un número entero
  @Min(0) // Validador para asegurar que sea mayor o igual a 0
  @Max(10) // Validador para asegurar que sea menor o igual a 10
  urgency: number;

  @Column()
  @IsBoolean()
  retribution: boolean;

  @ManyToOne(() => PositionEntity)
  position: PositionEntity;

  @OneToMany(() => MatchEntity, (match) => match.offer, { nullable: true })
  match: MatchEntity[];

  @ManyToOne(() => ClubEntity, (club) => club.offers, { nullable: true })
  club?: ClubEntity;


  @Column({ type: 'jsonb', nullable: true })
  @IsArray()
  inscriptions: string[]; 
}
