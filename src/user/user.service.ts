import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}


  findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }

  findOne(email: string): Promise<UserDto> {
    return this.usersRepository.findOne({where: {email: email}})
  }

  async remove(email: string): Promise<void> {
    let user = this.usersRepository.findOne({where: {email: email}});
    await this.usersRepository.delete((await user)._id);
  }
  
  async create(userDto: UserDto): Promise<void> {
    await this.usersRepository.save(userDto);
  }

  async update(email: string, userDto: UserDto): Promise<void> {
    let user = this.usersRepository.findOne({where: {email: email}});
    await this.usersRepository.update((await user)._id, userDto);
  }
}
