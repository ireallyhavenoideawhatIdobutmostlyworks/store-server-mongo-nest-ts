import { UserDto } from "../dto/user.dto";
import { UserEntity } from "./user.entity";


export class UserEntityConverter {

    private constructor(){}


    public static convertToEntity(userDto: UserDto): UserEntity {
        return new UserEntity(userDto.firstName, userDto.lastName, userDto.email);
    }
}