import { PartialType } from '@nestjs/mapped-types';
import { CreatePomodoroTimerDto } from './create-pomodoro-timer.dto';

export class UpdatePomodoroTimerDto extends PartialType(CreatePomodoroTimerDto) {}
