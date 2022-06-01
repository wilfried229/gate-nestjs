import { Test, TestingModule } from '@nestjs/testing';
import { AbonnersController } from './abonners.controller';
import { AbonnersService } from './abonners.service';

describe('AbonnersController', () => {
  let controller: AbonnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbonnersController],
      providers: [AbonnersService],
    }).compile();

    controller = module.get<AbonnersController>(AbonnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
