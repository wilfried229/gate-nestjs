import { Module } from '@nestjs/common';
import { DemandeCartesService } from './demande-cartes.service';
import { DemandeCartesController } from './demande-cartes.controller';

@Module({
  controllers: [DemandeCartesController],
  providers: [DemandeCartesService]
})
export class DemandeCartesModule {}
