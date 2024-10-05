import { BaseEntity } from 'src/config/base.entity';
import { ClubEntity } from 'src/club/entities/club.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { LikeEntity } from 'src/like/entities/like.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { SportmanEntity } from 'src/sportman/entities/sportman.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne
} from 'typeorm';
import { NotificationEntity } from 'src/notification/entities/notification.entity';
@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  nickname: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true, default: null })
  googleId: string | null;

  @Column({ nullable: true, default: null })
  facebookId: string | null;

  @Column({ nullable: true, default: null })
  appleId: string | null;

  @Column({ default: '' })
  stripeId: string;

  @Column({ nullable: true })
  password: string | null;

  @Column({
    type: 'enum',
    enum: ['sportman', 'club', 'invitado']
  })
  type: 'sportman' | 'club' | 'invitado';

  @Column({ default: 'basic' })
  plan: string;

  @Column({ default: '', nullable: true })
  planId: string;

  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ nullable: true })
  push_token: string;

  @Column({ type: 'simple-array', nullable: true })
  following: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  banned: string[] | null;

  // @Column({ type: 'simple-array', nullable: true })
  // followers: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;

  @OneToOne(() => ClubEntity, { nullable: true })
  @JoinColumn()
  club: ClubEntity | null;

  @Column({ default: false })
  emailCheck: boolean;

  @Column({ default: false, nullable: true })
  tokenConfirmacion: string;

  @Column({ default: null, nullable: true })
  tokenRecuperacion: string;

  @OneToOne(() => SportmanEntity, { nullable: true })
  @JoinColumn()
  sportman: SportmanEntity | null;

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  comments: CommentEntity[];

  @OneToMany(() => LikeEntity, (like) => like.author)
  likes: LikeEntity[];

  // Relación de seguimiento de usuarios
  @ManyToMany(() => UserEntity, (user) => user.followers)
  @JoinTable({
    name: 'user_follows', // Nombre de la tabla intermedia
    joinColumn: { name: 'followerId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'followingId', referencedColumnName: 'id' }
  })
  followingUsers: UserEntity[];

  @ManyToMany(() => UserEntity, (user) => user.followingUsers)
  followers: UserEntity[];

  @OneToMany(() => NotificationEntity, (notification) => notification.user)
  notifications: NotificationEntity[];
}
