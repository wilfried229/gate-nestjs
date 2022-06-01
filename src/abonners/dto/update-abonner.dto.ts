import { PartialType } from '@nestjs/swagger';
import { CreateAbonnerDto } from './create-abonner.dto';

export class UpdateAbonnerDto extends PartialType(CreateAbonnerDto) {}
