import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UserDto {
    
    @IsNotEmpty()
    @IsString()
    readonly firstName: string

    @IsNotEmpty()
    @IsString()
    readonly lastName: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    readonly email: string
}
