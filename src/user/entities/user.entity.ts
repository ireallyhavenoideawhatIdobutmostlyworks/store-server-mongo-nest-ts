import { IsEmail, IsNotEmpty, IsString, Validate } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ObjectID, ObjectIdColumn } from "typeorm"

@Entity()
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @IsNotEmpty()
    @IsString()
    @Column()
    readonly firstName: string

    @IsNotEmpty()
    @IsString()
    @Column()
    readonly lastName: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @Column()
    readonly email: string
}
