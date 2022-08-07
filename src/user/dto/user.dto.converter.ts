import { UserDto } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";

export class UserDtoConverter {

    private constructor(){}


    public static convertToDto(userEntity: UserEntity): UserDto {
        return new UserDto(userEntity.firstName, userEntity.lastName, userEntity.email, userEntity.password);
    }
}