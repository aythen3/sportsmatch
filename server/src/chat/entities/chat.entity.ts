import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity'; // Importa la entidad User
import { MessageEntity } from './message.entity'; // Importa la entidad de mensajes

@Entity({ name: 'chat' })
export class ChatEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  // Relación con el usuario A
  @ManyToOne(() => UserEntity, (user) => user.chatsAsUserA)
  userA: UserEntity;

  // Relación con el usuario B
  @ManyToOne(() => UserEntity, (user) => user.chatsAsUserB)
  userB: UserEntity;

  // Relación con los mensajes
  @OneToMany(() => MessageEntity, (message) => message.chat)
  messages: MessageEntity[];
}
