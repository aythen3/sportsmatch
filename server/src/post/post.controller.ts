import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  public async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  public async findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto
  ) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }

  @Post(':postId/info-relation')
  async findInfoRelation(
    @Param('postId') postId: number, 
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
    return this.postService.findInfoRelation(postId, relationsArray);
  }

  
}
