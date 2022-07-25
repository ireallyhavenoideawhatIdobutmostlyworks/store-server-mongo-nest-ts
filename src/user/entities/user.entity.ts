import { IsEmail, IsNotEmpty, IsString, Validate } from "class-validator";
import e from "express";
import { Entity, PrimaryGeneratedColumn, Column, ObjectID, ObjectIdColumn } from "typeorm"


@Entity()
export class UserEntity {

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }


    @ObjectIdColumn()
     _id: ObjectID;

    @IsNotEmpty()
    @IsString()
    @Column()
     firstName: string

    @IsNotEmpty()
    @IsString()
    @Column()
     lastName: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @Column()
     email: string
}
