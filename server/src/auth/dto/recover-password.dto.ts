/* eslint-disable prettier/prettier */

import { IsString } from "class-validator";

export class RecoverPassword{
    @IsString()
    email: string;
}