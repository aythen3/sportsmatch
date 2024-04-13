import { BaseEntity } from 'src/config/base.entity';
import { Entity, Column } from 'typeorm';

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
