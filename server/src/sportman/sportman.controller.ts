import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SportmanService } from './sportman.service';
import { CreateSportmanDto } from './dto/create-sportman.dto';
import { UpdateSportmanDto } from './dto/update-sportman.dto';

@Controller('sportman')
export class SportmanController {
  constructor(private readonly sportmanService: SportmanService) {}

  @Post()
  create(@Body() createSportmanDto: CreateSportmanDto) {
    return this.sportmanService.create(createSportmanDto);
  }

  @Get()
  findAll() {
    return this.sportmanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportmanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSportmanDto: UpdateSportmanDto) {
    return this.sportmanService.update(+id, updateSportmanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportmanService.remove(+id);
  }
}
