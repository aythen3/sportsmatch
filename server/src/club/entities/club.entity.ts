import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'club' })
export class ClubEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  field: string;

  @Column()
  year: number;

  @Column()
  capacity: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  img_perfil?: string;

  @Column({ nullable: true })
  img_front?: string;
}
