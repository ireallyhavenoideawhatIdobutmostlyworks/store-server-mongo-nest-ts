import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  public constructor(private readonly userService: UserService) {}


  @Get()
  public findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  public findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Post()
  public create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Patch(':email')
  public updateByEmail(@Param('email') email: string, @Body() userDto: UserDto) {
    return this.userService.updateByEmail(email, userDto);
  }

  @Delete(':email')
  public removeByEmail(@Param('email') email: string) {
    return this.userService.removeByEmail(email);
  }
}
