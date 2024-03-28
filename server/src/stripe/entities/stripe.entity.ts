import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
@Entity({ name: 'subscrition' })
export class SubscriptionEntity extends BaseEntity {
  @Column()
  stripeSubscriptionId: string;

  @Column()
  status: string;

  @Column()
  planId: string;
}
