import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}


  @Post()
  protected create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  protected findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  protected findOne(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch(':email')
  protected update(@Param('email') email: string, @Body() userDto: UserDto) {
    return this.userService.updateByEmail(email, userDto);
  }

  @Delete(':email')
  protected remove(@Param('email') email: string) {
    return this.userService.removeByEmail(email);
  }
}
