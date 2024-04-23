import { BaseEntity } from 'src/config/base.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { LikeEntity } from 'src/like/entities/like.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  nickname: string;

  @Column({ unique: true })
  email: string | null = null;

  @Column({ unique: true })
  googleId: string | null = null;

  @Column({ unique: true })
  facebookId: string | null = null;

  @Column({ unique: true })
  appleId: string | null = null;

  @Column({default:""})
  stripeId: string;

  @Column()
  password: string | null = null;

  @Column({
    type: 'enum',
    enum: ['sportman', 'club']
  })
  type: 'sportman' | 'club';

  @Column({ default: 'basic' })
  plan: string;

  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  following: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  followers: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;

  @OneToOne(() => ClubEntity, { nullable: true })
  @JoinColumn()
  club: ClubEntity | null;

  @OneToOne(() => SportmanEntity, { nullable: true })
  @JoinColumn()
  sportman: SportmanEntity | null;

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  comments: CommentEntity[];

  @OneToMany(() => LikeEntity, (like) => like.author)
  likes: LikeEntity[];
}
