import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  public async getFeed(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const { following, banned } = user;

    const followingIds = following?.filter((id) => id !== null);
    const bannedIds = banned?.filter((id) => id !== null);

    const posts = await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .leftJoinAndSelect('author.sportman', 'sportman')
      .where('post.author.id = :userId', { userId });

    if (followingIds && followingIds.length > 0) {
      posts.orWhere('post.author.id IN (:...followingIds)', { followingIds });
    }

    if (bannedIds && bannedIds.length > 0) {
      posts.andWhere('post.author.id NOT IN (:...bannedIds)', { bannedIds });
    }

    return posts.getMany();
  }

  public async create(createPostDto: CreatePostDto) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: createPostDto.userId },
      });
      const post = await this.postRepository.save({...createPostDto,author:user});
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
      }
      return newList;
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

  async findInfoRelation(postId: number, relations: string[]): Promise<any> {
    try {
      const validRelations = this.validateRelations(relations);

      // Verificar si hay al menos una relación válida
      if (validRelations.length === 0) {
        throw new Error('No se han proporcionado relaciones válidas.');
      }

      // Construir objeto de opciones para la consulta
      const options: any = { where: { id: postId }, relations: validRelations };
      console.log('options es', options);
      // Realizar la consulta del post con las relaciones especificadas
      const post = await this.postRepository.findOne(options);

      if (!post) {
        throw new NotFoundException(
          `No se encontró ningún post con el ID ${postId}.`
        );
      }

      return post;
    } catch (error) {
      console.log('este es el error ', error);
    }
  }

  private validateRelations(relations: string[]): string[] {
    const validRelations: string[] = [];

    // Definir relaciones válidas permitidas en la entidad Match
    const allowedRelations = ['comments', 'authorType', 'author']; // Agregar más según sea necesario

    // Filtrar relaciones válidasimage:
    relations.forEach((relation) => {
      if (allowedRelations.includes(relation)) {
        validRelations.push(relation);
      }
    });

    return validRelations;
  }
}
