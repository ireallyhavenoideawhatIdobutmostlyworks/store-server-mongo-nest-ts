import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm"

@Entity()
export class UserEntity {

    public constructor(firstName: string, lastName: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


    @ObjectIdColumn()
    public readonly _id: ObjectID;

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly firstName: string

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly lastName: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @Column()
    public readonly email: string

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly password: string
}
