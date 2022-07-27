import { IsEmail, IsNotEmpty, IsString, Validate } from "class-validator";
import e from "express";
import { Entity, PrimaryGeneratedColumn, Column, ObjectID, ObjectIdColumn } from "typeorm"

@Entity()
export class UserEntity {

    public constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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
}
