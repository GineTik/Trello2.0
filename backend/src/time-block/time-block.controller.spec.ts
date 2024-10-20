import { Test, TestingModule } from '@nestjs/testing';
import { TimeBlockController } from './time-block.controller';
import { TimeBlockService } from './time-block.service';

describe('TimeBlockController', () => {
  let controller: TimeBlockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeBlockController],
      providers: [TimeBlockService],
    }).compile();

    controller = module.get<TimeBlockController>(TimeBlockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
