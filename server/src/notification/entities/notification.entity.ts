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
}
