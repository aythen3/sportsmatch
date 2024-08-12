import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './../user/entities/user.entity';
import { NotificationEntity } from './../notification/entities/notification.entity';
import { ClubEntity } from './../club/entities/club.entity';
import { SportmanEntity } from './../sportman/entities/sportman.entity';
import { SportEntity } from './../sport/entities/sport.entity';
import { OfferEntity } from './../offer/entities/offer.entity';
import { SkillEntity } from './../skill/entities/skill.entity';
import { PositionEntity } from './../position/entities/position.entity';
import { MatchEntity } from './../match/entities/match.entity';
import { ImgManager } from './../img-manager/entities/img-manager.entity';
import { PostEntity } from './../post/entities/post.entity';
import { CommentEntity } from './../comment/entities/comment.entity';
import { LikeEntity } from './../like/entities/like.entity';
import { MessageEntity } from './../chat/entities/message.entity';
import { Info } from './info.interface';
import { ILike } from 'typeorm';
@Injectable()
export class InfoEntityService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(NotificationEntity)
    private readonly notificationRepository: Repository<NotificationEntity>,
    @InjectRepository(ClubEntity)
    private readonly clubRepository: Repository<ClubEntity>,
    @InjectRepository(SportmanEntity)
    private readonly sportmanRepository: Repository<SportmanEntity>,
    @InjectRepository(SportEntity)
    private readonly sportRepository: Repository<SportEntity>,
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>,
    @InjectRepository(SkillEntity)
    private readonly skillRepository: Repository<SkillEntity>,
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
    @InjectRepository(MatchEntity)
    private readonly matchRepository: Repository<MatchEntity>,
    @InjectRepository(ImgManager)
    private readonly imgManagerRepository: Repository<ImgManager>,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>,
    @InjectRepository(MessageEntity)
    private readonly chatRepository: Repository<MessageEntity>,
  ) {}

  async getInfo(entity: string, id: string, relation: string, property: string, nestedProperty: string) {
    const repository = this.getRepositoryByEntity(entity);
    console.log("el repositorio es", repository)
    
    if (!repository) {
      throw new NotFoundException('Entidad no encontrada');
    }
  
    const entityInstance = await repository.findOne({
      where: { id: id },
      relations: [`${relation}.${property}`]
    });
  
    console.log("HOOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  
    if (entityInstance) {
      if (property === 'null') {
        // Si se proporciona 'null' como property, devolver el objeto hasta ese punto
        return entityInstance;
      } else if (entityInstance[relation] && property !== 'null' && entityInstance[relation][property]) {
        const nestedEntity = entityInstance[relation][property];
        if (nestedProperty === 'null') {
          // Si se proporciona 'null' como nestedProperty, devolver el objeto hasta ese punto
          return entityInstance;
        } else if (nestedEntity && nestedEntity[nestedProperty]) {
          // Si nestedProperty está presente en el objeto, retornar el objeto completo
          return entityInstance;
        } else {
          // Si nestedProperty no está presente, realizar una consulta recursiva para obtenerlo
          const nestedEntityRepository = this.getRepositoryByEntity(property);
          console.log("nestedEntityRepository", nestedEntityRepository);
          if (nestedEntityRepository) {
            const result = await nestedEntityRepository.findOne({
              where: { id: nestedEntity.id },
              relations: [nestedProperty]
            });
            if (result) {
              // Agregar el resultado a la propiedad nestedProperty dentro del objeto original
              entityInstance[relation][property][nestedProperty] = result;
              return entityInstance;
            }
          }
        }
      }
    }
  
    return entityInstance;
  }
  

 
  async filterProperty(entity: string, property: string, filterValue: string) {
    const repository = this.getRepositoryByEntity(entity);
    if (!repository) {
      throw new NotFoundException('Entidad no encontrada');
    }
  
    try {
      const results = await repository
        .createQueryBuilder('entity')
        .leftJoinAndSelect('entity.user', 'user')
        .select()
        .where(`entity.${property} ILIKE :filterValue`, { filterValue: `%${filterValue}%` })
        .getMany();
  console.log(results,"results")
      return results;
    } catch (error) {
      console.log(error)
      throw new Error('Error al realizar la consulta');
    }
  }
  

async dynamicFilter(entity: string, filters: any) {
  const repository = this.getRepositoryByEntity(entity);
  if (!repository) {
    throw new NotFoundException('Entidad no encontrada');
  }

  try {
    let queryBuilder = repository.createQueryBuilder('entity');

    // Construir la cláusula WHERE dinámicamente
    Object.entries(filters).forEach(([key, value]) => {
      if (typeof value === 'string' && value.toLowerCase() === 'true') {
        // Si el valor es una cadena "true", convertirlo a booleano
        value = true;
      } else if (typeof value === 'string' && value.toLowerCase() === 'false') {
        // Si el valor es una cadena "false", convertirlo a booleano
        value = false;
      }
      
      // Agregar la condición al queryBuilder según el tipo de valor
      if (typeof value === 'boolean') {
        queryBuilder = queryBuilder.andWhere(`entity.${key} = :${key}`, { [key]: value });
      } else if (typeof value === 'string') {
        queryBuilder = queryBuilder.andWhere(`entity.${key} ILIKE :${key}`, { [key]: `%${value}%` });
      } else if (typeof value === 'number') {
        queryBuilder = queryBuilder.andWhere(`entity.${key} > :${key}`, { [key]: value });
      }
    });

    // Ejecutar la consulta y devolver los resultados
    const results = await queryBuilder.getMany();
    return results;
  } catch (error) {
    throw new Error('Error al realizar la consulta');
  }
}



filterInfo(info: Info, filter: Info): string[] {
  const matches: string[] = [];

  // Iteramos sobre las propiedades del objeto Info
  for (const key in info) {
    if (info.hasOwnProperty(key)) {
      // Verificamos si la propiedad existe en el filtro y si sus valores coinciden
      if (filter.hasOwnProperty(key) && info[key] === filter[key]) {
        matches.push(key);
      }
    }
  }

  return matches;
}

  private getRepositoryByEntity(entity: string): Repository<any> | null {
    console.log("entrando  a repositorios")
    switch (entity) {
      case 'user':
        return this.userRepository;
      case 'notification':
        return this.notificationRepository;
      case 'club':
        return this.clubRepository;
      case 'sportman':
        return this.sportmanRepository;
      case 'sport':
        return this.sportRepository;
      case 'offer':
        return this.offerRepository;
      case 'skill':
        return this.skillRepository;
      case 'position':
        return this.positionRepository;
      case 'match':
        return this.matchRepository;
      case 'imgManager':
        return this.imgManagerRepository;
      case 'post':
        return this.postRepository;
      case 'comment':
        return this.commentRepository;
      case 'like':
        return this.likeRepository;
      case 'message':
        return this.chatRepository;
      default:
        return null;
    }
  }

}
