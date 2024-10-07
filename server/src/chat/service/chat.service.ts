import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { MessageEntity } from '../entities/message.entity';
import { Repository } from 'typeorm';
import { ChatEntity } from '../entities/chat.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>
  ) {}
  create() {
    return 'This action adds a new socket';
  }

  findAll() {
    return `This action returns all socket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socket`;
  }

  update(id: number) {
    return `This action updates a #${id} socket`;
  }

  // Método para obtener los mensajes de un usuario
  async getChatsForUser(userId: string): Promise<MessageEntity[]> {
    try {
      const chats = await this.messageRepository
        .createQueryBuilder('message')
        .where(
          'message.senderId = :userId AND message.senderDelete IS NULL OR message.receiverId = :userId AND message.receiverDelete IS NULL',
          { userId }
        )
        .orderBy('message.createdAt', 'DESC')
        .getMany();

      return chats;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getUserChats(userId: string): Promise<Record<string, MessageEntity[]>> {
    const messages = await this.messageRepository
      .createQueryBuilder('message')
      .select([
        'message.id',
        'message.createdAt',
        'message.updatedAt',
        'message.senderId',
        'message.receiverId',
        'message.room',
        'message.message',
        'message.isReaded',
        'message.senderDelete',
        'message.receiverDelete',
        'message.prop1',
        'message.prop2',
        'message.prop3',
        'message.prop4'
      ])
      .where('message.senderId = :userId OR message.receiverId = :userId', {
        userId
      })
      .getMany();

    // Agrupar los mensajes por el campo "room"
    const chats = messages.reduce(
      (acc, message) => {
        if (!acc[message.room]) {
          acc[message.room] = [];
        }
        acc[message.room].push(message);
        return acc;
      },
      {} as Record<string, MessageEntity[]>
    );

    return chats;
  }

  public roomIdGenerator(senderId: string, receiverId: string): string {
    // Ordena los IDs alfabéticamente para asegurar la consistencia de la sala
    const sortedIds = [senderId, receiverId].sort();
    return sortedIds.join('_'); // Concatena los IDs con un guion bajo
  }

  async findChatBetweenUsers(
    userAId: string,
    userBId: string
  ): Promise<ChatEntity | null> {
    return this.chatRepository.findOne({
      where: [
        { userA: { id: userAId }, userB: { id: userBId } },
        { userA: { id: userBId }, userB: { id: userAId } }
      ],
      relations: ['messages', 'userA', 'userB']
    });
  }

  async createChat(userAId: string, userBId: string): Promise<ChatEntity> {
    const chat = this.chatRepository.create({
      userA: { id: userAId },
      userB: { id: userBId }
    });
    return this.chatRepository.save(chat);
  }
}
