import { Body, Controller, Get, Param, ParseArrayPipe, Post, Query } from '@nestjs/common';
import { InfoEntityService } from './info-entity.service';
import { NotificationService } from 'src/notification/notification.service';
import { Info } from './info.interface';

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

//buscar parcialmente un string dentro de una propiedad, de una entidad

  @Post('/:entity/:property/filter')
  async filterProperty(
    @Param('entity') entity: string,
    @Param('property') property: string,
    @Body() filterValue: { value: string }
  ) {
    try {
      console.log("entra aca")
      const results = await this.infoEntityService.filterProperty(entity, property, filterValue.value);
      return { data: results };
    } catch (error) {
      return { error: error.message };
    }
  }



  @Get('/:entity')
  async filterEntity(
    @Param('entity') entity: string,
    @Query('filters', new ParseArrayPipe({ items: String})) filters: string[]
  ) {
    const filterObject = {};
    filters.forEach(filter => {
      const [key, value] = filter.split(':');
      filterObject[key] = value;
    });

    try {
      const results = await this.infoEntityService.dynamicFilter(entity, filterObject);
      return { data: results };
    } catch (error) {
      return { error: error.message };
    }
  }

// buscar
@Post('filter')
async filterInfo(@Body() info: Info, @Body() filter: Info) {
  try {
    const matches = this.infoEntityService.filterInfo(info, filter);
    return { data: matches };
  } catch (error) {
    return { error: error.message };
  }
}
}
