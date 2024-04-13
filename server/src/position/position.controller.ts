import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  public async create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }

  @Get('/positionmaker')
  public async positionMaker() {
    return this.positionService.positionMaker();
  }

  @Get()
  public async findAll() {
    return this.positionService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.positionService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdatePositionDto
  ) {
    return this.positionService.update(id, updatePositionDto);
  }


  @Post(':positionId/info-relation')
  async findInfoRelation(
    @Param('positionId') positionId: number, 
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
    return this.positionService.findInfoRelation(positionId, relationsArray);
  }



}
