import { HttpException, Injectable } from '@nestjs/common';

import { UpdateLikeDto } from './dto/update-like.dto';
import { LikeEntity } from './entities/like.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/post/post.service';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>,

    private readonly postService: PostService
  ) {}
  public async create(createLikeDto: any) {
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
  }

  public async findAll() {
    return this.likeRepository.find({ where: { isDelete: false } });
  }

  public async findExisten(
    postId: string,
    authorId: string
  ): Promise<LikeEntity> {
    const like = await this.likeRepository
      .createQueryBuilder('like')
      .where('like.post = :postId', { postId })
      .andWhere('like.author = :authorId', { authorId })
      .getOne();

    return like;
  }

  public async findOne(id: string) {
    const like = await this.likeRepository
      .createQueryBuilder('like')
      .where({ id })
      .getOne();
    if (!like) {
      throw new HttpException(`Like id ${id} not found`, 404);
    }
    return like;
  }

  public async update(id: string, updateLikeDto: UpdateLikeDto) {
    const like = await this.findOne(id);
    if (!like) {
      throw new HttpException(`Like con ID ${id} no encontrado`, 404);
    }
    for (const key in updateLikeDto) {
      like[key] = updateLikeDto[key];
    }
    return await this.likeRepository.save(like);
  }

  public async remove(id: string) {
    await this.likeRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
