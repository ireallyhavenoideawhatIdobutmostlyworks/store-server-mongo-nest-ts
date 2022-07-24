import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  public constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}


  public findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }

  public findOneByEmail(email: string): Promise<UserDto> {
    return this.usersRepository.findOne({where: {email: email}})
  }

  public async create(userDto: UserDto): Promise<void> {
    await this.usersRepository.save(userDto);
  }

  public async updateByEmail(email: string, userDto: UserDto): Promise<void> {
    const user = await this.usersRepository.findOne({where: {email: email}});
    this.usersRepository.update(user._id, userDto);
  }

  public async removeByEmail(email: string): Promise<void> {
    const user = await this.usersRepository.findOne({where: {email: email}});
    this.usersRepository.delete(user._id);
  }
}
