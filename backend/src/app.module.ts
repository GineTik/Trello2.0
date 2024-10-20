import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { TimeBlockModule } from './time-block/time-block.module';
import { PomodoroTimerModule } from './pomodoro-timer/pomodoro-timer.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, TaskModule, TimeBlockModule, PomodoroTimerModule],
})
export class AppModule {}
