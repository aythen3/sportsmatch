import { BaseEntity } from 'src/config/base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { ChatEntity } from './chat.entity';

export enum DeleteStatus {
  TRUE = 'true',
  FALSE = 'false',
  NULL = 'null'
}

@Entity({ name: 'message' })
export class MessageEntity extends BaseEntity {
  @Column()
  senderId: string; // El ID del remitente del mensaje

  @Column()
  receiverId: string; // El ID del receptor del mensaje

  @Column()
  room: string; // La sala a la que pertenece el mensaje

  @Column()
  message: string; // El contenido del mensaje

  @Column({ default: false })
  isReaded: boolean; // El contenido del mensaje

  @Column({ default: null, nullable: true })
  senderDelete: boolean; // Estado de eliminación del mensaje para el remitente

  @Column({ default: null, nullable: true })
  receiverDelete: boolean; // Estado de eliminación del mensaje para el receptor
  // Propiedades flexibles
  @Column({ type: 'json', nullable: true })
  prop1: Record<string, any> | null;

  @Column({ type: 'json', nullable: true })
  prop2: Record<string, any> | null;

  @Column({ type: 'simple-array', nullable: true })
  prop3: string[] | null;

  @Column({ type: 'simple-array', nullable: true })
  prop4: string[] | null;

  @ManyToOne(() => ChatEntity, (chat) => chat.messages, { onDelete: 'CASCADE' })
  chat: ChatEntity; // Relación con el chat
}
