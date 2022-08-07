import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UserDto {

    public constructor(firstName: string, lastName: string, email:string, password:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    
    @IsNotEmpty()
    @IsString()
    public readonly firstName: string

    @IsNotEmpty()
    @IsString()
    public readonly lastName: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    public readonly email: string

    @IsNotEmpty()
    @IsString()
    public readonly password: string
}
