import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';

@Entity({ name: 'resetCode' })
export class ResetCodeEntity extends BaseEntity {
  @Column()
  code: string;

  @Column({ unique: true })
  email: string;
  @Column()
  expiresAt: Date;
}
