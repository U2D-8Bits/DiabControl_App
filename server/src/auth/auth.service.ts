/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User>,

    private jwtService: JwtService
  ) {}

// Metodo para crear un usuario.
  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);

    try{

      const {password, ...userData} = createUserDto;
      const newUser = new this.userModel({
        password: bcrypt.hashSync(password, 10),
        ...userData
      });

      await newUser.save();
      const {password:_, ...user} = newUser.toJSON();

      return user;

    } catch(error){
      console.log('Error =>', error.code)
      if(error.code === 11000){
        throw new BadRequestException(`${ createUserDto.email} already exist!`)
      }

      throw new InternalServerErrorException('Something terrible happen!')
    }



    // 1 - Encriptar la contrasena

    // 2 - Guardar el usuario

  }


// Metodo para Login
  async login( loginDto: LoginDto ){
  const {username, password} = loginDto;

  const user = await this.userModel.findOne({username});
  if( !username ){
    throw new UnauthorizedException('Invalid credentials');
  }

  if( !bcrypt.compareSync(password, user.password) ){
    throw new UnauthorizedException('Invalid credentials');
  }

  const { password:_password, ...result} = user.toJSON();


  return{
    user: result,
    token: this.getJWT({id: user.id}),
  }
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

// Metodo para generar el JWT
  getJWT( payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }
}
