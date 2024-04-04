import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {}
  public async create(createPostDto: CreatePostDto) {
    try {
      const post = await this.postRepository.save(createPostDto);
      // Si no se pudo crear el nuevo position, lanzar una excepción
      if (!post) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The new post is not created'
        });
      }
      // Devolver el nuevo position del usuario
      return post;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(query: any) {
    try {
      const posts: PostEntity[] = await this.postRepository.find({
        where: { isDelete: false, ...query }
      });
      if (posts.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Posts not found'
        });
      }
      return posts;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string) {
    try {
      const post = await this.postRepository
        .createQueryBuilder('post')
        .where({ id })
        .getOne();

      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post id: ${id} not found`
        });
      }
      return post;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.findOne(id);
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post id: ${id} not found`
        });
      }
      for (const key in updatePostDto) {
        post[key] = updatePostDto[key];
      }
      return await this.postRepository.save(post);
    } catch (error) {}
  }

  public async remove(id: string) {
    try {
      await this.postRepository.update(id, { isDelete: true });
      const post = await this.findOne(id);
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post id: ${id} not found`
        });
      }
      return post;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updatePostLikeCount(id: string, increment: number) {
    try {
      const post = await this.findOne(id);
      if (!post) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Post id: ${id} not found`
        });
      }
      // Actualizar el conteo de likes del post
      post.likes += increment;
      await this.postRepository.save(post);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
    // Buscar el post
  }

  public async updatePostComentCount(post: PostEntity, increment: number) {
    try {
      post.commentCount += increment;
      await this.postRepository.save(post);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
