import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { PostService } from 'src/post/post.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    private readonly userService: UserService,
    private readonly postService: PostService
  ) {}
  public async create(createCommentDto: CreateCommentDto) {
    try {
      const author = await this.userService.findOne(createCommentDto.author);
      if (!author) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User with id: ${createCommentDto.author} not found`
        });
      }
      const post = await this.postService.findOne(createCommentDto.post);
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User with id: ${createCommentDto.author} not found`
        });
      }

      this.postService.updatePostComentCount(post, 1);

      const comment = new CommentEntity();
      comment.content = createCommentDto.content;
      comment.author = author;
      comment.post = post;
      await this.commentRepository.save(comment);
      // Si no se pudo crear el nuevo comment, lanzar una excepción
      if (!comment) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `Comment not created`
        });
      }
      // Devolver el nuevo comment del usuario
      return comment;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll() {
    const comments: CommentEntity[] = await this.commentRepository.find({
      where: { isDelete: false }
    });
    if (comments.length === 0) {
      throw new ErrorManager({
        type: 'BAD_REQUEST',
        message: `Comment not created`
      });
    }
    return comments;
  }

  public async findAllByPost(postId: string): Promise<CommentEntity[]> {
    try {
      // Buscar todos los comentarios asociados al post especificado
      const comments = await this.commentRepository
        .createQueryBuilder('comment')
        .leftJoinAndSelect('comment.author', 'author')
        .leftJoinAndSelect('author.club', 'club')
        .where('comment.post = :postId', { postId })
        .getMany();
      // Si no se encuentran comentarios, lanzar una excepción
      if (!comments || comments.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'comments not found'
        });
      }
      // Devolver los comentarios encontrados
      return comments;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAllByUser(id: string): Promise<CommentEntity[]> {
    try {
      // Buscar todos los comentarios asociados al post especificado
      const comments = await this.commentRepository.find({
        where: { author: { id: id } },
        relations: ['post'] // Incluir información del autor del comentario
      });
      // Si no se encuentran comentarios, lanzar una excepción
      if (!comments || comments.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'comments not found'
        });
      }
      // Devolver los comentarios encontrados
      return comments;
    } catch (error) {}
  }

  public async findOne(id: string) {
    try {
      const comment = await this.commentRepository
        .createQueryBuilder('comment')
        .where({ id })
        .getOne();
      if (!comment) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Coment id: ${id} not found`
        });
      }
      return comment;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async update(id: string, updateCommentDto: UpdateCommentDto) {
    try {
      const comment = await this.findOne(id);
      if (!comment) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment id: ${id} not found`
        });
      }
      for (const key in updateCommentDto) {
        comment[key] = updateCommentDto[key];
      }
      return await this.commentRepository.save(comment);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async remove(id: string) {
    try {
      await this.commentRepository.update(id, {
        isDelete: true
      });
      const comment: CommentEntity = await this.findOne(id);
      if (!comment) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Comment id: ${id} not found`
        });
      }
      return comment;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
