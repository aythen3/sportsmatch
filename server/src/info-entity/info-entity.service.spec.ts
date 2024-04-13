import { Test, TestingModule } from '@nestjs/testing';
import { InfoEntityService } from './info-entity.service';

describe('InfoEntityService', () => {
  let service: InfoEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoEntityService],
    }).compile();

    service = module.get<InfoEntityService>(InfoEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
