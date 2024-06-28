import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSportmanDto } from './dto/create-sportman.dto';
import { UpdateSportmanDto } from './dto/update-sportman.dto';
import { SportmanEntity } from './entities/sportman.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class SportmanService {
  constructor(
    @InjectRepository(SportmanEntity)
    private readonly sportmanRepository: Repository<SportmanEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService
  ) {}

  public async create(createSportmanDto: CreateSportmanDto) {
    const { sportmanData, userId } = createSportmanDto;
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User with id: ${userId} not found`
        });
      }
      const newSportman = await this.sportmanRepository.create(sportmanData);
      const saveSportman = await this.sportmanRepository.save({
        ...newSportman,
        user: user
      });

      if (!saveSportman) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `the new sportman is not created`
        });
      }
      await this.userRepository.save({
        ...user,
        sportman: saveSportman
      });

      return saveSportman;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  /**
   * Método para obtener todos los Deportistas
   */
  public async findAll(query: any) {
    try {
      const where = { isDelete: false };
      if (query) {
        for (const key in query) {
          where[key] = query[key];
        }
      }
      const sportmans = await this.sportmanRepository.find({
        where: where
      });
      if (sportmans.length === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Sportmans not found'
        });
      }
      return sportmans;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string) {
    try {
      const sportman = await this.sportmanRepository
        .createQueryBuilder('sportman')
        .where({ id })
        .getOne();

      // Si no se encuentra el sportman, lanzar una excepción
      if (!sportman) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Sportman id: ${id} not found`
        });
      }

      // Devolver el sportman encontrado
      return sportman;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  /**
   * Método para actualizar un deportista por su ID
   * @param {string} id - El ID del deportista a actualizar
   * @param {UpdateSportmanDto} updateSportmanDto - Los datos del deportista a actualizar
   */
  public async update(id: string, updateSportmanDto: UpdateSportmanDto) {
    try {
      const sportmanData = updateSportmanDto;
      const sportman = await this.findOne(id);
      if (!sportman) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Sportman id: ${id} not found`
        });
      }
      console.log('sportman: ', sportman);
      for (const key in sportmanData) {
        if (key === 'info') {
          sportman.info = { ...sportman.info, ...sportmanData[key] };
        } else {
          sportman[key] = sportmanData[key];
        }
      }
      console.log(sportmanData,sportman)
      return await this.sportmanRepository.save(sportman);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async remove(id: string) {
    try {
      await this.sportmanRepository.update(id, { isDelete: true });
      const sportman: SportmanEntity = await this.findOne(id);
      if (!sportman) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `User id: ${id} not found`
        });
      }
      return sportman;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }



  async findInfoRelation(sportmanId: number, relations: string[]): Promise<any> {
    try {
     const validRelations = this.validateRelations(relations);
 
     // Verificar si hay al menos una relación válida
     if (validRelations.length === 0) {
       throw new Error('No se han proporcionado relaciones válidas.');
     }
 
     // Construir objeto de opciones para la consulta
     const options: any = { where: { id: sportmanId }, relations: validRelations };
 console.log("options es", options)
     // Realizar la consulta del post con las relaciones especificadas
     const user = await this.sportmanRepository.findOne(options);
 
     if (!user) {
       throw new NotFoundException(`No se encontró ningún post con el ID ${sportmanId}.`);
     }
 
     return user;
    } catch (error) {
     console.log('este es el error ',error)
    }
   }
 
   private validateRelations(relations: string[]): string[] {
     const validRelations: string[] = [];
 
     // Definir relaciones válidas permitidas en la entidad Match
     const allowedRelations = ['user', 'club','sport', 'skill','position', 'matches']; // Agregar más según sea necesario
 
     // Filtrar relaciones válidas
     relations.forEach(relation => {
       if (allowedRelations.includes(relation)) {
         validRelations.push(relation);
       }
     });
 
     return validRelations;
   }

   async filterSportmen(filters: any): Promise<SportmanEntity[]> {
    // Obtener todas las entradas de la tabla Sportman
    const allSportmen = await this.sportmanRepository.find({relations:['user']});

    // Filtrar las entradas basadas en los filtros proporcionados
    const filteredSportmen = allSportmen.filter(sportman => {
        // Inicializar un contador para el número de coincidencias
        let matches = 0;

        // Recorrer todas las propiedades en el objeto de filtros
        for (const key of Object.keys(filters)) {
            // Verificar si la propiedad actual existe en la entrada del Sportman
            if (sportman.info[key]) {
                if (key === 'nickname' || key === 'prop1' || key === 'prop2' || key === 'prop3' || key === 'position' || key === 'city') {
                    // Comparar la propiedad de forma parcialmente similar, ignorando mayúsculas y minúsculas
                    if (sportman.info[key].toLowerCase().startsWith(filters[key].toLowerCase())) {
                        // Incrementar el contador de coincidencias si los valores coinciden parcialmente
                        matches++;
                    }
                } else if (key === 'attack' || key === 'defense' || key === 'speed' || key === 'height') {
                    // Verificar si el valor de la propiedad es igual o mayor al valor pasado en los filtros
                    const filterValue = typeof filters[key] === 'number' ? filters[key] : 55;
                    if (sportman.info[key] >= filterValue) {
                        // Incrementar el contador de coincidencias si los valores coinciden
                        matches++;
                    }
                } else {
                    // Comparación normal para otras propiedades
                    if (sportman.info[key] === filters[key]) {
                        // Incrementar el contador de coincidencias si los valores coinciden
                        matches++;
                    }
                }
            }
        }

        // La entrada del Sportman se incluirá en los resultados si todas las propiedades coinciden
        return matches === Object.keys(filters).length;
    });

    return filteredSportmen;
}



  async filterSportmenNoParcial(filters: any): Promise<SportmanEntity[]> {
    // Obtener todas las entradas de la tabla Sportman
    const allSportmen = await this.sportmanRepository.find();

    // Filtrar las entradas basadas en los filtros proporcionados
    const filteredSportmen = allSportmen.filter(sportman => {
      // Inicializar un contador para el número de coincidencias
      let matches = 0;

      // Recorrer todas las propiedades en el objeto de filtros
      for (const key of Object.keys(filters)) {
        // Verificar si la propiedad actual existe en la entrada del Sportman
        if (sportman.info[key] === filters[key]) {
          // Incrementar el contador de coincidencias si los valores coinciden
          matches++;
        }
      }

      // La entrada del Sportman se incluirá en los resultados solo si todas las propiedades coinciden
      return matches === Object.keys(filters).length;
    });

    return filteredSportmen;
  }
  
}
