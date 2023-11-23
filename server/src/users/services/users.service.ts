/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */


import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {


  // ------------------------------------- CREATE SERVICE ------------------------------------- //

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  // ------------------------------------- FIND ALL SERVICE ------------------------------------- //

  findAll() {
    return `This action returns all users`;
  }


  // ------------------------------------- FIND ONE BY ID SERVICE ------------------------------------- //

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  // ------------------------------------- UPDATE SERVICE ------------------------------------- //

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }


  // ------------------------------------- REMOVE SERVICE ------------------------------------- //

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
