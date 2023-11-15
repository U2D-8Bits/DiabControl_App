/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto, LoginDto, UpdateUserDto, CreateUserDto } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { get } from 'http';
import { LoginResponse } from './interfaces/login-response';
import { User } from './entities/user.entity';
import { LoginGuard } from './guards/login.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }


  // Ruta para Login
  @UseGuards( LoginGuard )
  @Post('/login')
  login( @Request() req: Request,  @Body() loginDto: LoginDto ){
    return this.authService.login(loginDto);
  }

  // Ruta para register
  @Post('/register')
  register( @Body() registerUserDto: RegisterUserDto ){
    return this.authService.register(registerUserDto);
  }

  // Ruta para obtener todos los usuarios de la App
  @UseGuards( AuthGuard )
  @Get('/getUsers')
  findAll( @Request() req:Request ) {
    return this.authService.findAll();
  }

  //Ruta para obtener un solo usuario especifico por ID
  @Get('/user:id')
  findOne(@Param('id') id: string) {
    return this.authService.findUserByID(id);
  }

  //Modificar un usuario por ID
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(+id, updateUserDto);
  }

  //Modificar a isActive = false por ID
  @Patch(':id')
  stateUser( @Param('id') id:string, @Body() UpdateUserDto: UpdateUserDto){
    return this.authService.update(+id, UpdateUserDto);
  }

  //Borrar un usuario por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }


  //Checkear el tocken usando LoginResponse
  @UseGuards( AuthGuard )
  @Get('check-token')
  checkToken( @Request() req:Request ): LoginResponse{
    const user = req['user'] as User;
    return {
      user,
      token: this.authService.getJWT({ id: user._id }),
    }
  }

}
