import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
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

  public roomIdGenerator(senderId: string, receiverId: string): string {
    // Ordena los IDs alfabéticamente para asegurar la consistencia de la sala
    const sortedIds = [senderId, receiverId].sort();
    return sortedIds.join('_'); // Concatena los IDs con un guion bajo
  }
}
