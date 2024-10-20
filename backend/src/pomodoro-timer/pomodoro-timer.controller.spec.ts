import { Test, TestingModule } from '@nestjs/testing';
import { PomodoroTimerController } from './pomodoro-timer.controller';
import { PomodoroTimerService } from './pomodoro-timer.service';

describe('PomodoroTimerController', () => {
  let controller: PomodoroTimerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PomodoroTimerController],
      providers: [PomodoroTimerService],
    }).compile();

    controller = module.get<PomodoroTimerController>(PomodoroTimerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
