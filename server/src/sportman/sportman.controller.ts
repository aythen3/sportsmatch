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
import { SportmanService } from './sportman.service';
import { CreateSportmanDto } from './dto/create-sportman.dto';
import { UpdateSportmanDto } from './dto/update-sportman.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ImgManagerService } from 'src/img-manager/img-manager.service';

@Controller('sportman')
export class SportmanController {
  constructor(
    private readonly sportmanService: SportmanService,
    private readonly imgManagerService: ImgManagerService
  ) {}

  @Post()
  public async create(@Body() createSportmanDto: CreateSportmanDto) {
    return await this.sportmanService.create(createSportmanDto);
  }

  @Get()
  findAll() {
    return this.sportmanService.findAll();
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
}
