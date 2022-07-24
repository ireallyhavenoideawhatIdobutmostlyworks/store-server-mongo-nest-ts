import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  public constructor(private readonly userService: UserService) {}


  @Post()
  public create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  public findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  public findOne(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch(':email')
  public update(@Param('email') email: string, @Body() userDto: UserDto) {
    return this.userService.updateByEmail(email, userDto);
  }

  @Delete(':email')
  public remove(@Param('email') email: string) {
    return this.userService.removeByEmail(email);
  }
}
