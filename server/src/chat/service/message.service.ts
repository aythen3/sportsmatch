import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from '../entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>
  ) {}

  async saveMessage(
    senderId: string,
    receiverId: string,
    room: string,
    message: string
  ): Promise<MessageEntity> {
    const newMessage = this.messageRepository.create({
      senderId,
      receiverId,
      room,
      message
    });
    return await this.messageRepository.save(newMessage);
  }

  async getMessagesForRoom(
    room: string,
    createdAt?: Date,
    limit: number = 10
  ): Promise<MessageEntity[]> {
    let query = this.messageRepository
      .createQueryBuilder('message')
      .where('message.room = :room', { room })
      .orderBy('message.createdAt', 'DESC')
      .limit(limit);

    if (createdAt) {
      const date = new Date(createdAt); // Convierte la cadena de texto en un objeto Date

      query = query.andWhere('message.createdAt < :createdAt', {
        createdAt: date
      });
      query = query.orderBy('message.createdAt', 'DESC'); // Re-ordenar por fecha de creación (descendente)
    }

    return await query.getMany();
  }

  async getMessagesBetweenUsers(
    senderId: string,
    receiverId: string,
    room: string
  ): Promise<MessageEntity[]> {
    return await this.messageRepository.find({
      where: [
        { senderId, receiverId, room },
        { senderId: receiverId, receiverId: senderId, room }
      ]
    });
  }
}
