import { Test, TestingModule } from '@nestjs/testing';
import { DemandeCartesService } from './demande-cartes.service';

describe('DemandeCartesService', () => {
  let service: DemandeCartesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeCartesService],
    }).compile();

    service = module.get<DemandeCartesService>(DemandeCartesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
