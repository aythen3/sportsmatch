import { HttpException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { PostService } from 'src/post/post.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    private readonly userService: UserService,
    private readonly postService: PostService
  ) {}
  public async create(createCommentDto: CreateCommentDto) {
    console.log(createCommentDto);
    const author = await this.userService.findOne(createCommentDto.author);

    const post = await this.postService.findOne(createCommentDto.post);

    const comment = new CommentEntity();
    comment.content = createCommentDto.content;
    comment.author = author;
    comment.post = post;
    await this.commentRepository.save(comment);
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

  public async findAllByPost(postId: string): Promise<CommentEntity[]> {
    // Buscar todos los comentarios asociados al post especificado
    const comments = await this.commentRepository.find({
      where: { post: { id: postId } },
      relations: ['author'] // Incluir información del autor del comentario
    });
    // Si no se encuentran comentarios, lanzar una excepción
    if (!comments || comments.length === 0) {
      throw new HttpException(
        `No comments found for post with ID ${postId}`,
        404
      );
    }
    // Devolver los comentarios encontrados
    return comments;
  }

  public async findAllByUser(id: string): Promise<CommentEntity[]> {
    // Buscar todos los comentarios asociados al post especificado
    const comments = await this.commentRepository.find({
      where: { author: { id: id } },
      relations: ['post'] // Incluir información del autor del comentario
    });
    // Si no se encuentran comentarios, lanzar una excepción
    if (!comments || comments.length === 0) {
      throw new HttpException(`No comments found for post with ID ${id}`, 404);
    }
    // Devolver los comentarios encontrados
    return comments;
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
