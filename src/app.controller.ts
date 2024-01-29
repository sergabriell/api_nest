import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interfaces/user';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('user')
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}