import { HttpException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {}
  public async create(createPostDto: CreatePostDto) {
    const post = await this.postRepository.save(createPostDto);
    // Si no se pudo crear el nuevo position, lanzar una excepción
    if (!post) {
      throw new HttpException('The new post is not created', 501);
    }
    // Devolver el nuevo position del usuario
    return post;
  }

  public async findAll() {
    return this.postRepository.find({ where: { isDelete: false } });
  }

  public async findOne(id: string) {
    const post = await this.postRepository
      .createQueryBuilder('post')
      .where({ id })
      .getOne();

    if (!post) {
      throw new HttpException(`Post id ${id} not found`, 404);
    }
    return post;
  }

  public async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    if (!post) {
      throw new HttpException(`Post con ID ${id} no encontrado`, 404);
    }
    for (const key in updatePostDto) {
      post[key] = updatePostDto[key];
    }
    return await this.postRepository.save(post);
  }

  public async remove(id: string) {
    await this.postRepository.update(id, { isDelete: true });
    return await this.findOne(id);
  }
}
