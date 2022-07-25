import { IsEmail, IsNotEmpty, IsString } from "class-validator"


export class UserDto {

    constructor(firstName: string, lastName: string, email:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    
    @IsNotEmpty()
    @IsString()
     firstName: string

    @IsNotEmpty()
    @IsString()
    readonly lastName: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    readonly email: string
}
