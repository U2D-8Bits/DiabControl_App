/* eslint-disable prettier/prettier */

import { IsString, IsEmail, MinLength } from "class-validator";

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

}