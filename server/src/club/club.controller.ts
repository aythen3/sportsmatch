import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ImgManagerService } from '../img-manager/img-manager.service';

@Controller('club')
export class ClubController {
  constructor(
    private readonly clubService: ClubService,
    private readonly imgManagerService: ImgManagerService
  ) {}

  @Post()
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }

  @Post('creadordeclub1')
  create2(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }


  @Get()
  findAll() {
    return this.clubService.findAll();
  }

  @Patch('/img/:id')
  @UseInterceptors(FilesInterceptor('files', 2))
  public async updateImg(
    @Param('id') id: string,
    @UploadedFiles() files: any[]
  ) {
    console.log('CONTROLLER FILES', files);
    console.log('CONTROLLER ID', id);

    if (!files || files.length !== 2) {
      throw new Error('Debes proporcionar dos archivos.');
    }

    const [file1, file2] = files;
    const image_url1 = await this.imgManagerService.imgUpload(file1);
    const image_url2 = await this.imgManagerService.imgUpload(file2);

    const club = await this.clubService.findOne(id);
    const newClub = {
      ...club,
      img_perfil: image_url1,
      img_front: image_url2
    };

    await this.clubService.update(id, newClub);

    return newClub;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return this.clubService.update(id, updateClubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubService.remove(id);
  }


  @Post(':clubId/info-relation')
  async findInfoRelation(
    @Param('clubId') clubId: number, 
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
    return this.clubService.findInfoRelation(clubId, relationsArray);
  }

  
}
