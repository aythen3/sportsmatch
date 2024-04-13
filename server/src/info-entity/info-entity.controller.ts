import { Controller, Get, Param } from '@nestjs/common';
import { InfoEntityService } from './info-entity.service';
import { NotificationService } from 'src/notification/notification.service';

@Controller('info-entity')
export class InfoEntityController {
  constructor(
    private readonly infoEntityService: InfoEntityService,
    private readonly NotificationService: NotificationService) 

    {}
  
//nombre de la entidad, usuario a filtrar, la relacion necesaria, la relacion dentro de la relacion anterior, la ultima relacion (que esta dentro de la relacion anterior, dentro de la anterior)
  @Get('/:entity/:id/:relation/:property/:nestedProperty')
  async getInfo(
    @Param('entity') entity: string,
    @Param('id') id: string,
    @Param('relation') relation: string,
    @Param('property') property: string,
    @Param('nestedProperty') nestedProperty: string,
  ) {
    try {
      console.log("entity", entity)
      console.log("id", id)
      console.log("relation", relation)
      console.log("property", property)
      console.log("nestedProperty", nestedProperty)


      console.log("entrando a la ruta")
      const result = await this.infoEntityService.getInfo(entity, id, relation, property, nestedProperty);
      return { data: result };
    } catch (error) {
      return { error: error.message };
    }
  }
}
