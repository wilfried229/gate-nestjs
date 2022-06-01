import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandeCartesService } from './demande-cartes.service';
import { CreateDemandeCarteDto } from './dto/create-demande-carte.dto';
import { UpdateDemandeCarteDto } from './dto/update-demande-carte.dto';

@Controller('demande-cartes')
export class DemandeCartesController {
  constructor(private readonly demandeCartesService: DemandeCartesService) {}

  @Post()
  create(@Body() createDemandeCarteDto: CreateDemandeCarteDto) {
    return this.demandeCartesService.create(createDemandeCarteDto);
  }

  @Get()
  findAll() {
    return this.demandeCartesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeCartesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandeCarteDto: UpdateDemandeCarteDto) {
    return this.demandeCartesService.update(+id, updateDemandeCarteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeCartesService.remove(+id);
  }
}
