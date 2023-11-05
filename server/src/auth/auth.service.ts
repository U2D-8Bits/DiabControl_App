/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User>,
  ) {}


  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);


    try{
      const newUser = new this.userModel(createUserDto);
      return await newUser.save();

    } catch(error){
      console.log('Error =>', error.code)
      if(error.code === 11000){
        throw new BadRequestException(`${ createUserDto.email} already exist!`)
      }

      throw new InternalServerErrorException('Something terrible happen!')
    }



    // 1 - Encriptar la contrasena

    // 2 - Guardar el usuario

    // 3 - Generar el JWT
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
