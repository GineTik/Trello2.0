import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PomodoroTimerService } from './pomodoro-timer.service';
import { CreatePomodoroTimerDto } from './dto/create-pomodoro-timer.dto';
import { UpdatePomodoroTimerDto } from './dto/update-pomodoro-timer.dto';

@Controller('pomodoro-timer')
export class PomodoroTimerController {
  constructor(private readonly pomodoroTimerService: PomodoroTimerService) {}

  @Post()
  create(@Body() createPomodoroTimerDto: CreatePomodoroTimerDto) {
    return this.pomodoroTimerService.create(createPomodoroTimerDto);
  }

  @Get()
  findAll() {
    return this.pomodoroTimerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pomodoroTimerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePomodoroTimerDto: UpdatePomodoroTimerDto) {
    return this.pomodoroTimerService.update(+id, updatePomodoroTimerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pomodoroTimerService.remove(+id);
  }
}
