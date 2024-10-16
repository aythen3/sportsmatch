import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Put,
  Req
} from '@nestjs/common';
import { ChatService } from './service/chat.service';
import { MessageService } from './service/message.service';
import { Get } from '@nestjs/common';
import { MessageEntity } from './entities/message.entity';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly messageService: MessageService
  ) {}

  @Post('/deleteAllMessageChat')
  async marcarMensajesComoEliminados(
    @Body() body: { senderId: string; receiverId: string; room: string }
  ) {
    try {
      await this.messageService.marcarMensajesComoEliminados(
        body.senderId,
        body.receiverId,
        body.room
      );
      return { message: 'Mensajes marcados como eliminados exitosamente.' };
    } catch (error) {
      console.error('Error al marcar mensajes como eliminados:', error);
      throw new InternalServerErrorException('Error interno del servidor.');
    }
  }

  @Get('/room')
  public async getChat(@Req() req: any) {
    const { senderId, receiverId, createdAt } = req.query;
    const room = this.chatService.roomIdGenerator(senderId, receiverId);
    return await this.messageService.getMessagesForRoom(
      room,
      senderId,
      receiverId,
      createdAt
    );
  }

  @Put('readed/:id')
  async markAsRead(@Param('id') id: string): Promise<MessageEntity> {
    return this.messageService.markAsRead(id);
  }

  @Post('/user-mensagge')
  public async getUserMessage(@Body() body: { userId: string }) {
    try {
      const chats = await this.chatService.getChatsForUser(body.userId);
      return chats;
    } catch (error) {
      console.error('Error al obtener los chats del usuario:', error);
      throw new InternalServerErrorException('Error interno del servidor.');
    }
  }

  // @Post('chats')
  // public async getUserChat(@Body() body: { userId: string }) {
  //   return this.chatService.getUserChats(body.userId);
  // }
  // //   @Get('/visible-messages/:senderId/:receiverId')
  // async getVisibleMessages(
  //   @Param('senderId') senderId: string,
  //   @Param('receiverId') receiverId: string
  // ): Promise<MessageEntity[]> {
  //   try {
  //     return await this.messageService.getVisibleMessages(senderId, receiverId);
  //   } catch (error) {
  //     throw new Error('Failed to fetch visible messages.');
  //   }
  // }

  //   @Delete('/user/:senderId/messages/:receiverId')
  // async deleteMessagesBetweenUsers(
  //   @Param('senderId') senderId: string,
  //   @Param('receiverId') receiverId: string
  // ): Promise<{ message: string }> {
  //   try {
  //     await this.messageService.deleteMessagesBetweenUsers(senderId, receiverId);
  //     return { message: 'Messages deleted successfully.' };
  //   } catch (error) {
  //     throw new Error('Failed to delete messages.');
  //   }
  // }
  @Get('/user/:userId/chats')
  async getUserChats(@Param('userId') userId: string) {
    try {
      const chats = await this.chatService.getChatsForUserr(userId);
      return {
        statusCode: 200,
        message: 'Chats obtenidos exitosamente.',
        data: chats
      };
    } catch (error) {
      console.error('Error al obtener los chats del usuario:', error);
      throw new InternalServerErrorException({
        statusCode: 500,
        message: 'Error al obtener los chats del usuario.'
      });
    }
  }
  @Get('/between-users/:userA/:userB')
  public async getChatBetweenUsers(
    @Param('userA') userA: string,
    @Param('userB') userB: string
  ) {
    try {
      // Llama al servicio para obtener el chat
      const chat = await this.chatService.findChatBetweenUsers(userA, userB);
      if (!chat) {
        throw new NotFoundException(
          'No se encontró un chat entre los dos usuarios.'
        );
      }
      return {
        statusCode: 200,
        message: 'Chat encontrado exitosamente.',
        data: chat
      };
    } catch (error) {
      console.error('Error al obtener el chat entre usuarios:', error);
      throw new InternalServerErrorException('Error interno del servidor.');
    }
  }

  // Ruta para crear un nuevo chat entre dos usuarios
  @Post('create')
  async createChat(@Body() body: { userAId: string; userBId: string }) {
    const { userAId, userBId } = body;

    if (!userAId || !userBId) {
      throw new BadRequestException('Los IDs de los usuarios son requeridos');
    }

    // Llama al servicio para crear el chat
    const newChat = await this.chatService.createChatFun(userAId, userBId);

    return {
      statusCode: 201,
      message: 'Chat creado exitosamente',
      data: newChat
    };
  }
}
