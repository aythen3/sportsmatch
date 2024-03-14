import { BaseEntity } from 'src/config/base.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'comment' })
export class CommentEntity extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  author: UserEntity;

  @Column()
  authorType: string; // Puedes definir un enum si prefieres

  @ManyToOne(() => PostEntity, (post) => post.comments)
  post: PostEntity;
}
