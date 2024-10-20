import { Test, TestingModule } from '@nestjs/testing';
import { TimeBlockService } from './time-block.service';

describe('TimeBlockService', () => {
  let service: TimeBlockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeBlockService],
    }).compile();

    service = module.get<TimeBlockService>(TimeBlockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
