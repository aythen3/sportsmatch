import { CommentEntity } from 'src/comment/entities/comment.entity';
import { BaseEntity } from 'src/config/base.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'post' })
export class PostEntity extends BaseEntity {
  @Column('simple-array')
  image: string[];

  @Column()
  description: string;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  commentCount: number;

  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  author: UserEntity;

  @Column()
  authorType: string; // sportMan o club

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];
}

