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
import { CreateTimeBlockDto } from './dto/create-time-block.dto';
import { UpdateTimeBlockOrdersDto } from './dto/update-time-block-orders.dto';
import { UpdateTimeBlockDto } from './dto/update-time-block.dto';
import { TimeBlockService } from './time-block.service';

@Controller('user/time-blocks')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @Post()
  @HttpCode(200)
  @Auth()
  @UsePipes(new ValidationPipe())
  create(
    @CurrentUser('id') userId: string,
    @Body() createTimeBlockDto: CreateTimeBlockDto,
  ) {
    return this.timeBlockService.create(userId, createTimeBlockDto);
  }

  @Get()
  @Auth()
  findAll(@CurrentUser('id') userId: string) {
    return this.timeBlockService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeBlockService.findOne(id);
  }

  @Patch('/order')
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  updateOrders(
    @CurrentUser('id') userId: string,
    @Body() orders: UpdateTimeBlockOrdersDto,
  ) {
    return this.timeBlockService.updateOrders(userId, orders);
  }

  @Patch(':id')
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() updateTimeBlockDto: UpdateTimeBlockDto,
  ) {
    return this.timeBlockService.update(userId, id, updateTimeBlockDto);
  }

  @Delete(':id')
  @Auth()
  @HttpCode(200)
  remove(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.timeBlockService.remove(userId, id);
  }
}
