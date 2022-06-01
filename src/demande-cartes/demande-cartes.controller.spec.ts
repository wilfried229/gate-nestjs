import { Test, TestingModule } from '@nestjs/testing';
import { DemandeCartesController } from './demande-cartes.controller';
import { DemandeCartesService } from './demande-cartes.service';

describe('DemandeCartesController', () => {
  let controller: DemandeCartesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandeCartesController],
      providers: [DemandeCartesService],
    }).compile();

    controller = module.get<DemandeCartesController>(DemandeCartesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
