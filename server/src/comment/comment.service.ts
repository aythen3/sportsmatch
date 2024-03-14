import { HttpException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>
  ) {}
  public async create(createCommentDto: CreateCommentDto) {
    const comment = await this.commentRepository.save(createCommentDto);
    // Si no se pudo crear el nuevo comment, lanzar una excepción
    if (!comment) {
      throw new HttpException('The new comment is not created', 501);
    }
    // Devolver el nuevo comment del usuario
    return comment;
  }

  public async findAll() {
    return this.commentRepository.find({ where: { isDelete: false } });
  }

  public async findOne(id: string) {
    const comment = await this.commentRepository
      .createQueryBuilder('comment')
      .where({ id })
      .getOne();
    if (!comment) {
      throw new HttpException(`Comment id ${id} not found`, 404);
    }
    return comment;
  }

  public async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.findOne(id);
    if (!comment) {
      throw new HttpException(`Comment con ID ${id} no encontrado`, 404);
    }
    for (const key in updateCommentDto) {
      comment[key] = updateCommentDto[key];
    }
    return await this.commentRepository.save(comment);
  }

  public async remove(id: string) {
    await this.commentRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
