import { PartialType } from '@nestjs/swagger';
import { CreateDemandeCarteDto } from './create-demande-carte.dto';

export class UpdateDemandeCarteDto extends PartialType(CreateDemandeCarteDto) {}
