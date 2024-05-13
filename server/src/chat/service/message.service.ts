import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from '../entities/message.entity';
import { ErrorManager } from 'src/utils/error.manager';

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
      message,
      isReaded: false
    });
    return await this.messageRepository.save(newMessage);
  }

  async getMessagesForRoom(
    room: string,
    senderId: string,
    receiverId: string,
    createdAt?: Date,
    
  ): Promise<MessageEntity[]> {
    try {
      console.log('room:', room);
      console.log('senderId', senderId);
      console.log('receiverId',receiverId);
      console.log('data from backend:', createdAt);
  
      let query = this.messageRepository
        .createQueryBuilder('message')
        .where('message.room = :room', { room })
        .andWhere('(message.senderId = :senderId AND message.receiverDelete IS NULL) OR (message.receiverId = :receiverId AND message.senderDelete IS NULL)', { senderId, receiverId }) // Pasando senderId y receiverId como parámetros
        .orderBy('message.createdAt', 'DESC')
  
      if (createdAt) {
        const date = new Date(createdAt); // Convierte la cadena de texto en un objeto Date
        query = query.andWhere('message.createdAt < :createdAt', { createdAt: date }); // Pasando createdAt como parámetro
        query = query.orderBy('message.createdAt', 'DESC'); // Re-ordenar por fecha de creación (descendente)
      }
  
      console.log("2")
      const roomMessages = await query.getMany();
      console.log("roomMessages", roomMessages)
  
      return roomMessages;
    } catch (error) {
      console.log("entra al catch")
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  

  async getMessagesBetweenUsers(
    senderId: string,
    receiverId: string,
    room: string
  ): Promise<MessageEntity[]> {
    try {
      const messageList = await this.messageRepository.find({
        where: [
          { senderId, receiverId, room },
          { senderId: receiverId, receiverId: senderId, room }
        ]
      });

      return messageList;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async markAsRead(id: string): Promise<MessageEntity> {
    const messageToUpdate = await this.messageRepository
      .createQueryBuilder('message')
      .where({ id })
      .getOne();
    messageToUpdate.isReaded = true;
    return this.messageRepository.save(messageToUpdate);
  }


  async deleteChatForUser(userId: string): Promise<void> {
    try {
      // Busca y elimina todos los mensajes donde el usuario es el remitente o el receptor
      await this.messageRepository
        .createQueryBuilder()
        .delete()
        .where('senderId = :userId OR receiverId = :userId', { userId })
        .execute();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getVisibleMessages(senderId: string, receiverId: string): Promise<MessageEntity[]> {
    try {
      const messages = await this.messageRepository.find({
        where: {
          senderId,
          receiverId,
          senderDelete: null, // El mensaje no ha sido eliminado por el remitente
          receiverDelete: null, // El mensaje no ha sido eliminado por el receptor
        },
      });
      return messages;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  


  async marcarMensajesComoEliminados(senderId: string, receiverId: string, room: string) {
    // Encuentra todos los mensajes entre los dos usuarios en la sala especificada
    const mensajes = await this.messageRepository.find({
        where: [
            { senderId, receiverId, room },
            { senderId: receiverId, receiverId: senderId, room }
        ]
    });

    // Marca los mensajes como eliminados para el usuario que desea eliminarlos
    mensajes.forEach(mensaje => {
        if (mensaje.senderId === senderId) {
            mensaje.senderDelete = true;
        } else {
            mensaje.receiverDelete = true;
        }
    });

    // Guarda los cambios en la base de datos
    await this.messageRepository.save(mensajes);
}

}
