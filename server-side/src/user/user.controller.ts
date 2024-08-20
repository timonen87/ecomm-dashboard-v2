import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { CurrentUser } from './decorators/user.decorators';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth()
  @Get('profile')
  async getProfile(@CurrentUser('id') id: string) {
    return this.userService.getById(id)
  }

}
