import { Test, TestingModule } from '@nestjs/testing';
import { PomodoroTimerService } from './pomodoro-timer.service';

describe('PomodoroTimerService', () => {
  let service: PomodoroTimerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PomodoroTimerService],
    }).compile();

    service = module.get<PomodoroTimerService>(PomodoroTimerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
