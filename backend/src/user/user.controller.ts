import { Controller, Get, HttpCode } from '@nestjs/common';
import { Auth } from 'src/auth/decarators/auth.decorator';
import { CurrentUser } from 'src/auth/decarators/user.decorator';
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
}
