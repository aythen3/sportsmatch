import { HttpException, Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { LikeEntity } from './entities/like.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>
  ) {}
  public async create(createLikeDto: CreateLikeDto) {
    const like = await this.likeRepository.save(createLikeDto);
    // Si no se pudo crear el nuevo like, lanzar una excepción
    if (!like) {
      throw new HttpException('The new like is not created', 501);
    }
    // Devolver el nuevo like del usuario
    return like;
  }

  public async findAll() {
    return this.likeRepository.find({ where: { isDelete: false } });
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
