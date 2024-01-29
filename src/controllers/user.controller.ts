import { Controller, Get, Param, Query } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('users')
  async getFilteredUsers(
    @Query('searchString') searchString?: string,
    @Query('orderBy') orderBy?: 'asc' | 'desc',
  ): Promise<User[]> {
    const or = searchString ? {
        OR: [
          {
            name: { contains: searchString },
          },
          {
            email: { contains: searchString },
          },
        ],
      } : {}
    return this.userService.users({
      where: {...or},
      orderBy: {
        id: orderBy
      }
    });
  }
}