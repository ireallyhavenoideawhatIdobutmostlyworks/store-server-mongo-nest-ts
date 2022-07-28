import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  public constructor(private readonly userService: UserService) {}


  @Get()
  @HttpCode(200)
  public findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  @HttpCode(200)
  public findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Post()
  @HttpCode(201)
  public create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Patch(':email')
  @HttpCode(200)
  public updateByEmail(@Param('email') email: string, @Body() userDto: UserDto) {
    return this.userService.updateByEmail(email, userDto);
  }

  @Delete(':email')
  @HttpCode(204)
  public removeByEmail(@Param('email') email: string) {
    return this.userService.removeByEmail(email);
  }
}
