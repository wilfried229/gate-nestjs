import { Injectable } from '@nestjs/common';
import { CreateDemandeCarteDto } from './dto/create-demande-carte.dto';
import { UpdateDemandeCarteDto } from './dto/update-demande-carte.dto';

@Injectable()
export class DemandeCartesService {
  create(createDemandeCarteDto: CreateDemandeCarteDto) {
    return 'This action adds a new demandeCarte';
  }

  findAll() {
    return `This action returns all demandeCartes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandeCarte`;
  }

  update(id: number, updateDemandeCarteDto: UpdateDemandeCarteDto) {
    return `This action updates a #${id} demandeCarte`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandeCarte`;
  }
}
