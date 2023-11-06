/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {

    // @Prop({autoIncrement: true})
    // id: string;

    @Prop({unique: true, required: true})
    username: string;

    @Prop({required: true, minlength: 8})
    password?: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    lastname: string;

    @Prop({unique: true, required: true})
    email: string;

    @Prop({type: [String], default: ['user'] })
    role: string[];

    @Prop({default: true})
    isActive: boolean;

    @Prop({required: true})
    genre: string;
}



export const UserSchema = SchemaFactory.createForClass(User);