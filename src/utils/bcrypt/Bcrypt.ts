import { UserDto } from "src/user/dto/user.dto";

export class Bcrypt {

    private constructor(){}

    public static async decode(userDto: UserDto): Promise<UserDto> {
        const bcrypt = require('bcrypt');
        const encodedPassword = await bcrypt.hash(userDto.password, 10);
        return new UserDto(userDto.firstName, userDto.lastName, userDto.email, encodedPassword);
    }
}