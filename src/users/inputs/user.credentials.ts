import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { In } from "typeorm";

@InputType()
export class UserCredentials{
    @Field()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @Field()
    @IsNotEmpty()
    @MinLength(8)
    password:string;
}