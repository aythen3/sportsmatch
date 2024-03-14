import { CommentEntity } from 'src/comment/entities/comment.entity';
import { BaseEntity } from 'src/config/base.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'post' })
export class PostEntity extends BaseEntity {
  @Column()
  image: string;

  @Column()
  description: string;

  @Column({ default: 0 })
  likes: number;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  author: UserEntity;

  @Column()
  authorType: string; // sportMan o club

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];
}
