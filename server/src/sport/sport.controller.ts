import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { SportService } from './sport.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';

@Controller('sport')
export class SportController {
  constructor(private readonly sportService: SportService) {}

  @Post()
  public async create(@Body() createSportDto: CreateSportDto) {
    return this.sportService.create(createSportDto);
  }

  @Get('/sportmaker')
  public async maker() {
    return this.sportService.sportMaker();
  }

  @Get()
  public async findAll() {
    return this.sportService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.sportService.findById(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto
  ) {
    return this.sportService.update(+id, updateSportDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.sportService.remove(+id);
  }


  @Post(':sportId/info-relation')
  async findInfoRelation(
    @Param('sportId') sportId: number, 
    @Body() requestBody: { relations: string }
  ): Promise<any[]> {
    // Verificar si se proporcionaron relaciones
    if (!requestBody.relations || typeof requestBody.relations !== 'string') {
      throw new Error('Debe proporcionar al menos una relación como una cadena de texto.');
    }
  console.log(requestBody.relations)
    // Convertir las relaciones en un array
    const relationsArray = requestBody.relations.split(',');
  
    // Llamar al servicio para obtener la información relacionada
    return this.sportService.findInfoRelation(sportId, relationsArray);
  }

}
