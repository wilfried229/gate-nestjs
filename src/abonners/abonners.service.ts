import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAbonnerDto } from './dto/create-abonner.dto';
import { UpdateAbonnerDto } from './dto/update-abonner.dto';
import { Abonner } from './entities/abonner.entity';

@Injectable()
export class AbonnersService {



  create(createAbonnerDto: CreateAbonnerDto) {
    return 'This action adds a new abonner';
  }

  findAll() {
    return `This action returns all abonners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abonner`;
  }

  update(id: number, updateAbonnerDto: UpdateAbonnerDto) {
    return `This action updates a #${id} abonner`;
  }

  remove(id: number) {
    return `This action removes a #${id} abonner`;
  }
}
