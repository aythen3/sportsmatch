import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { ImgManagerService } from './img-manager.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('img-manager')
export class ImgManagerController {
  constructor(private readonly imgManagerService: ImgManagerService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    const response = await this.imgManagerService.imgUpload(file);
    return response;
  }

  @Get()
  findAll() {
    return this.imgManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imgManagerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ejemplo: string) {
    return this.imgManagerService.update(id, ejemplo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imgManagerService.remove(id);
  }
}
