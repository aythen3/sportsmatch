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
import { OfferEntity } from 'src/offer/entities/offer.entity';
import { MatchEntity } from 'src/match/entities/match.entity';
import { ChatEntity } from 'src/chat/entities/chat.entity';
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

  @Column({ nullable: true, default: null })
  emailTemporal: string | null; // Almacena el nuevo email temporalmente

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

  @OneToOne(() => ClubEntity, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  club: ClubEntity | null;

  @Column({ default: false })
  emailCheck: boolean;

  @Column({ default: false, nullable: true })
  tokenConfirmacion: string;

  @Column({ default: null, nullable: true })
  tokenRecuperacion: string;

  @OneToOne(() => SportmanEntity, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  sportman: SportmanEntity | null;

  @OneToMany(() => PostEntity, (post) => post.author, { onDelete: 'CASCADE' })
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author, {
    onDelete: 'CASCADE'
  })
  comments: CommentEntity[];

  @OneToMany(() => LikeEntity, (like) => like.author, { onDelete: 'CASCADE' })
  likes: LikeEntity[];

  // Relación de seguimiento de usuarios
  @ManyToMany(() => UserEntity, (user) => user.followers, {
    onDelete: 'CASCADE'
  })
  @JoinTable({
    name: 'user_follows', // Nombre de la tabla intermedia
    joinColumn: { name: 'followerId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'followingId', referencedColumnName: 'id' }
  })
  followingUsers: UserEntity[];

  @ManyToMany(() => UserEntity, (user) => user.followingUsers, {
    onDelete: 'CASCADE'
  })
  followers: UserEntity[];

  @OneToMany(() => NotificationEntity, (notification) => notification.user, {
    onDelete: 'CASCADE'
  })
  notifications: NotificationEntity[];

  @ManyToMany(() => OfferEntity, (offer) => offer.usersInscriptions, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  offers: OfferEntity[];

  // Relación con MatchEntity
  @OneToMany(() => MatchEntity, (match) => match.user, { onDelete: 'CASCADE' })
  matches: MatchEntity[];

  // Relación con los chats donde el usuario es 'userA'
  @OneToMany(() => ChatEntity, (chat) => chat.userA, { onDelete: 'CASCADE' })
  chatsAsUserA: ChatEntity[];

  // Relación con los chats donde el usuario es 'userB'
  @OneToMany(() => ChatEntity, (chat) => chat.userB, { onDelete: 'CASCADE' })
  chatsAsUserB: ChatEntity[];
}
