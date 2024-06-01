import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query
} from '@nestjs/common';
import { SportmanService } from './sportman.service';
import { CreateSportmanDto } from './dto/create-sportman.dto';
import { UpdateSportmanDto } from './dto/update-sportman.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ImgManagerService } from 'src/img-manager/img-manager.service';
import { SportmanEntity } from './entities/sportman.entity';

@Controller('sportman')
export class SportmanController {
  constructor(
    private readonly sportmanService: SportmanService,
    private readonly imgManagerService: ImgManagerService
  ) { }

  @Post()
  public async create(@Body() createSportmanDto: CreateSportmanDto) {
    console.log('CONTROLLER', createSportmanDto);

    return await this.sportmanService.create(createSportmanDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.sportmanService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportmanService.findOne(id);
  }

  @Patch('/img/:id')
  @UseInterceptors(FilesInterceptor('files', 2))
  public async updateImg(
    @Param('id') id: string,
    @UploadedFiles() files: any[]
  ) {
    if (!files || files.length !== 2) {
      throw new Error('Debes proporcionar dos archivos.');
    }

    const [file1, file2] = files;
    const image_url1 = await this.imgManagerService.imgUpload(file1);
    const image_url2 = await this.imgManagerService.imgUpload(file2);
    console.log("pasa", image_url1)
    const sportman = await this.sportmanService.findOne(id);
    const newSportman = {
      ...sportman,
      info: { ...sportman.info, img_perfil: image_url1, img_front: image_url2 }
    };

    await this.sportmanService.update(id, newSportman);

    return newSportman;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSportmanDto: UpdateSportmanDto
  ) {
    return this.sportmanService.update(id, updateSportmanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportmanService.remove(id);
  }


  @Post(':sportmanId/info-relation')
  async findInfoRelation(
    @Param('sportmanId') sportmanId: number,
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
    return this.sportmanService.findInfoRelation(sportmanId, relationsArray);
  }

  @Post('filter')
  async filterSportmen(@Body() filters: any): Promise<SportmanEntity[]> {
    const sportmen = await this.sportmanService.filterSportmen(filters);
    return sportmen;
  }

  @Post('filterNoParcial')
  async filterSportmenNoParcial(@Body() filters: any): Promise<SportmanEntity[]> {
    const sportmen = await this.sportmanService.filterSportmenNoParcial(filters);
    return sportmen;
  }

}

