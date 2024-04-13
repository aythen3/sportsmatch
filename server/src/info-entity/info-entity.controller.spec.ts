import { Test, TestingModule } from '@nestjs/testing';
import { InfoEntityController } from './info-entity.controller';
import { InfoEntityService } from './info-entity.service';

describe('InfoEntityController', () => {
  let controller: InfoEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoEntityController],
      providers: [InfoEntityService],
    }).compile();

    controller = module.get<InfoEntityController>(InfoEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
