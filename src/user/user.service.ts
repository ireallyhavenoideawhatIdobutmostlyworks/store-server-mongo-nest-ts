import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bcrypt } from 'src/utils/bcrypt/Bcrypt';
import { ObjectID, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserDtoConverter } from './dto/user.dto.converter';
import { UserEntity } from './entities/user.entity';
import { UserEntityConverter } from './entities/user.entity.converter';

@Injectable()
export class UserService {

  public constructor(
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}


  public async findAll(): Promise<UserDto[]> {
    const usersEntityList: UserEntity[] = await this.usersRepository.find();
    return usersEntityList.map(entity => UserDtoConverter.convertToDto(entity)) as UserDto[];
  }

  public async findOneByEmail(email: string): Promise<UserDto> {
    const userEntity: UserEntity = await this.usersRepository.findOne({where: {email: email}});
    return UserDtoConverter.convertToDto(userEntity);
  }

  public async register(userDto: UserDto): Promise<boolean> {
    const user: UserDto = await Bcrypt.decode(userDto);
     
    const userEntity: UserEntity = await this.usersRepository.findOne({where: {email: user.email}});

    if(userEntity !== null) {
      return false;
    }

    await this.usersRepository.save(UserEntityConverter.convertToEntity(user));
    return true;
  }

  public async updateByEmail(email: string, userDto: UserDto): Promise<void> {
    const _ObjectId: ObjectID = (await this.usersRepository.findOne({where: {email: email}}))._id;
    this.usersRepository.update(_ObjectId, UserEntityConverter.convertToEntity(userDto));
  }

  public async removeByEmail(email: string): Promise<void> {
    const userEntity: UserEntity = await this.usersRepository.findOne({where: {email: email}});
    this.usersRepository.delete(userEntity._id);
  }
}
