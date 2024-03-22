import { Controller } from '@nestjs/common';
import { ChatService } from './service/chat.service';
import { MessageService } from './service/message.service';
import { Get, Query } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly messageService: MessageService
  ) {}

  @Get('/room')
  public async getChat(@Query() query: any) {
    const { senderId, receiverId, createdAt, limit } = query;
    const room = this.chatService.roomIdGenerator(senderId, receiverId);
    return await this.messageService.getMessagesForRoom(room, createdAt, limit);
  }
}
