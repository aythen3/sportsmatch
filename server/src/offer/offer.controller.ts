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
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post()
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offerService.create(createOfferDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.offerService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerService.findOne(id);
  }

  //------------agregar un match (pendiente)-----------------------------------//////////
  @Patch('/add-match/:id')
  addMatch(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offerService.addMatch(id, updateOfferDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offerService.update(id, updateOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerService.remove(id);
  }

  @Post(':offerId/agregar-inscripcion/:userId')
  async agregarInscripcion(@Param('offerId') offerId: string, @Param('userId') userId: string) {
    try {
      console.log("entra")
      await this.offerService.addInscription(offerId, userId);
      console.log("se rompe")

      return { exito: true, mensaje: 'Usuario agregado correctamente a las inscripciones de la oferta.' };
    } catch (error) {
      return { exito: false, mensaje: 'Error al agregar usuario a las inscripciones de la oferta.', error };
    }
  }

  @Delete(':offerId/eliminar-inscripcion/:userId')
  async eliminarInscripcion(@Param('offerId') offerId: string, @Param('userId') userId: string) {
    try {
      await this.offerService.removeInscription(offerId, userId);
      return { exito: true, mensaje: 'Usuario eliminado correctamente de las inscripciones de la oferta.' };
    } catch (error) {
      return { exito: false, mensaje: 'Error al eliminar usuario de las inscripciones de la oferta.', error };
    }
  }
}
