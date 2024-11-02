import {
  Body,
  Controller,
  Get,
  HttpCode,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/auth/decarators/auth.decorator';
import { CurrentUser } from 'src/auth/decarators/user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Auth()
  @Get('/profile')
  async profile(@CurrentUser('id') id: string) {
    return this.userService.getById(id);
  }

  @HttpCode(200)
  @Auth()
  @Patch('/profile')
  @UsePipes(new ValidationPipe())
  async update(@CurrentUser('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }
}
