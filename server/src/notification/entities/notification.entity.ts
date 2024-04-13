import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';

@Entity({ name: 'notification' })
export class NotificationEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  message: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  recipientId: string;

  @Column({ default: false })
  read: boolean;
  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;
}
