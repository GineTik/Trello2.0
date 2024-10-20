import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/auth/decarators/auth.decorator';
import { CurrentUser } from 'src/auth/decarators/user.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('user/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Auth()
  create(
    @Body() createTaskDto: CreateTaskDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.taskService.create(userId, createTaskDto);
  }

  @Get()
  @HttpCode(200)
  @Auth()
  findAll(@CurrentUser('id') userId: string) {
    return this.taskService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(userId, id, updateTaskDto);
  }

  @Delete(':id')
  @Auth()
  remove(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.taskService.remove(userId, id);
  }
}
