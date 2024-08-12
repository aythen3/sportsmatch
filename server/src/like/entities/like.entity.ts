import { BaseEntity } from 'src/config/base.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'like' })
export class LikeEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.likes)
  author: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.likes)
  post: PostEntity;
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
