import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/user/user.module';
import { PomodoroTimerController } from './pomodoro-timer.controller';
import { PomodoroTimerService } from './pomodoro-timer.service';

@Module({
  imports: [UserModule],
  controllers: [PomodoroTimerController],
  providers: [PomodoroTimerService, PrismaService],
})
export class PomodoroTimerModule {}
