import { Test, TestingModule } from '@nestjs/testing';
import { AbonnersService } from './abonners.service';

describe('AbonnersService', () => {
  let service: AbonnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbonnersService],
    }).compile();

    service = module.get<AbonnersService>(AbonnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
