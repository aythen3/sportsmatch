import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  public async create(@Body() createLikeDto: CreateLikeDto) {
    return this.likeService.create(createLikeDto);
  }

  @Get()
  public async findAll() {
    return this.likeService.findAll();
  }

  @Get('/find')
  public async findLike(
    @Query('postId') postId: string,
    @Query('authorId') authorId: string
  ) {
    return this.likeService.findExisten(postId, authorId);
  }
  
  @Get('/list')
  public async listofLikes(
   
    @Query('authorId') authorId: string
  ) {
    return this.likeService.likeList( authorId);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.likeService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateLikeDto: UpdateLikeDto
  ) {
    return this.likeService.update(id, updateLikeDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.likeService.remove(id);
  }
}
