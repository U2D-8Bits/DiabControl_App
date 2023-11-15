/* eslint-disable prettier/prettier */

import { IsString, IsEmail, MinLength, Matches } from "class-validator";

/* eslint-disable prettier/prettier */
export class RegisterUserDto {

    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @MinLength(8)
    password: string;

    @IsString()
    name: string;

    @IsString()
    lastname: string;

    @IsString()
    genre: string;

    @IsString()
    role: string;

    @Matches(/^0[89]\d{8}$/)
    phone: string;

    @Matches(/^(1[8-9]|[2-9][0-9])$/)
    age: string;


}