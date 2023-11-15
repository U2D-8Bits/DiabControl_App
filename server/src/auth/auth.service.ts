/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';


import { RegisterUserDto, LoginDto, UpdateUserDto, CreateUserDto } from './dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,

    private jwtService: JwtService
  ) { }

  // Metodo para crear un usuario.
  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);

    try {

      const { password, ...userData } = createUserDto;
      const newUser = new this.userModel({
        password: bcrypt.hashSync(password, 10),
        ...userData
      });

      await newUser.save();
      const { password: _, ...user } = newUser.toJSON();

      return user;

    } catch (error) {
      console.log('Error =>', error.code)
      if (error.code === 11000) {
        throw new ConflictException(`Some Data already exist!`)
      }

      throw new InternalServerErrorException('Something terrible happen!')
    }
  }



  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {

    const user = await this.create(registerUserDto);

    return {
      user,
      token: this.getJWT({ id: user._id }),
    }
  }



  // Metodo para Login
  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { username, password } = loginDto;

    const user = await this.userModel.findOne({ username });
    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _password, ...result } = user.toJSON();

    return {
      user: result,
      token: this.getJWT({ id: user.id }),
    }
  }


  // Metodo para obtener un usuario por ID y permitir accesos por Rol[Admin]
  async greatAccesUser(_userID: string) {
    const user = await this.userModel.findById(_userID);
    const resultUser = user.toJSON();
    return resultUser;
  }



  // Metodo para obtener un usuario por ID
  async findUserByID(idUser: string) {
    const user = await this.userModel.findById(idUser);
    const _user = user.toJSON();
    return _user;
  }



  //Metodo para obtener todos los usuarios
  findAll(): Promise<User[]> {
    return this.userModel.find();
  }



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }



  remove(id: number) {
    return `This action removes a #${id} auth`;
  }


  // Metodo para generar el JWT
  getJWT(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
