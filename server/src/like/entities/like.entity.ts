import { BaseEntity } from 'src/config/base.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'like' })
export class LikeEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.likes)
  author: UserEntity;

  @Column()
  authorType: string; // Puedes definir un enum si prefieres

  @ManyToOne(() => PostEntity, (post) => post.likes)
  post: PostEntity;
}
