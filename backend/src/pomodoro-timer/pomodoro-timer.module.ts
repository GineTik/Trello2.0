import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PomodoroTimerController } from './pomodoro-timer.controller';
import { PomodoroTimerService } from './pomodoro-timer.service';

@Module({
  controllers: [PomodoroTimerController],
  providers: [PomodoroTimerService, PrismaService],
})
export class PomodoroTimerModule {}
