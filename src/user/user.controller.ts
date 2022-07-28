import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { ResponseCreator } from 'src/utils/response/response.creator';
import { ResponseStatus } from 'src/utils/response/response.status';

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
  public async create(@Body() userDto: UserDto, @Res() response: Response) {
    const isSuccess: boolean = await this.userService.create(userDto);
    
    if(isSuccess) {
      return response.status(HttpStatus.CREATED).json(ResponseCreator.response(ResponseStatus.SUCCESS));       
    } else { 
      return response.status(HttpStatus.BAD_REQUEST).json(ResponseCreator.response(ResponseStatus.ERROR));  
    }
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
