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

  async getMessagesForRoom(room: string): Promise<MessageEntity[]> {
    return await this.messageRepository.find({ where: { room: room } });
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
