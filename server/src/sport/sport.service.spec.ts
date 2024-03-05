import { Test, TestingModule } from '@nestjs/testing';
import { SportService } from './sport.service';

describe('SportService', () => {
  let service: SportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportService],
    }).compile();

    service = module.get<SportService>(SportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
