import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbonnersService } from './abonners.service';
import { CreateAbonnerDto } from './dto/create-abonner.dto';
import { UpdateAbonnerDto } from './dto/update-abonner.dto';

@Controller('abonners')
export class AbonnersController {
  constructor(private readonly abonnersService: AbonnersService) {}

  @Post()
  create(@Body() createAbonnerDto: CreateAbonnerDto) {
    return this.abonnersService.create(createAbonnerDto);
  }

  @Get()
  findAll() {
    return this.abonnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abonnersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbonnerDto: UpdateAbonnerDto) {
    return this.abonnersService.update(+id, updateAbonnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abonnersService.remove(+id);
  }
}
