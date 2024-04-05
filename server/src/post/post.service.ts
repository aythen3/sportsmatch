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

  public async findAll() {
    try {
      const posts: PostEntity[] = await this.postRepository
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.author', 'author')
        .where({ isDelete: false })
        .getMany();
      if (posts.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Posts not found'
        });
      }
      const newList: PostEntity[] = [];
      for (const post of posts) {
        const newPost = await this.postRepository
          .createQueryBuilder('post')
          .leftJoinAndSelect('post.author', 'author')
          .leftJoinAndSelect(
            `author.${post.author.type}`,
            `${post.author.type}`
          )
          .where('post.id = :postId', { postId: post.id })
          .getOne();
        newList.push(newPost);
        return newList;
      }
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
