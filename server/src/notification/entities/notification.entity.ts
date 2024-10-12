import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { PostEntity } from 'src/post/entities/post.entity';

@Entity({ name: 'notification' })
export class NotificationEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  message: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  senderId: string;

  @Column()
  receiverId: string;

  @Column({ default: false, nullable: true })
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

  @ManyToOne(() => UserEntity, (user) => user.notifications, {
    onDelete: 'CASCADE'
  })
  user: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.notifications, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'postId' })
  post: PostEntity;
}
