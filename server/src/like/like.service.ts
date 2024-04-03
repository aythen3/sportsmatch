import { Injectable } from '@nestjs/common';

import { UpdateLikeDto } from './dto/update-like.dto';
import { LikeEntity } from './entities/like.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/post/post.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>,

    private readonly postService: PostService
  ) {}
  public async create(createLikeDto: any) {
    try {
      const { post, author } = createLikeDto;
      // Verificar si ya existe un like con el autor y el post especificados
      const existingLike = await this.findExisten(post, author);

      if (existingLike) {
        // Si existe un like, eliminarlo y devolver todos menos el eliminado
        await this.likeRepository.remove(existingLike);
        await this.postService.updatePostLikeCount(post, -1);
        const likes = await this.likeRepository.find();
        return likes.filter((like) => like.id !== existingLike.id);
      } else {
        // Si no existe un like, crear uno nuevo y devolver todos incluido el recién creado
        await this.likeRepository.save(createLikeDto);
        await this.postService.updatePostLikeCount(post, 1);
        const likes = await this.likeRepository.find();
        return likes;
      }
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll() {
    try {
      const likes: LikeEntity[] = await this.likeRepository.find({
        where: { isDelete: false }
      });
      if (likes.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Likes not found'
        });
      }
      return likes;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findExisten(
    postId: string,
    authorId: string
  ): Promise<LikeEntity> {
    try {
      const like = await this.likeRepository
        .createQueryBuilder('like')
        .where('like.post = :postId', { postId })
        .andWhere('like.author = :authorId', { authorId })
        .getOne();
      if (!like) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Like not found`
        });
      }
      return like;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  public async likeList(userId: string): Promise<LikeEntity[]> {
    try {
      const list = await this.likeRepository
        .createQueryBuilder('like')
        .select('like.id, like.post.id')
        .where('like.author = :userId', { userId })
        .leftJoin('like.post', 'post')
        .getRawMany();
      if (!list.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `likes not found`
        });
      }
      return list.map((like) => like.post_id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string) {
    try {
      const like = await this.likeRepository
        .createQueryBuilder('like')
        .where({ id })
        .getOne();
      if (!like) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Like id: ${id} not found`
        });
      }
      return like;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async update(id: string, updateLikeDto: UpdateLikeDto) {
    try {
      const like = await this.findOne(id);
      if (!like) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Like id: ${id} not found`
        });
      }
      for (const key in updateLikeDto) {
        like[key] = updateLikeDto[key];
      }
      return await this.likeRepository.save(like);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async remove(id: string) {
    await this.likeRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
