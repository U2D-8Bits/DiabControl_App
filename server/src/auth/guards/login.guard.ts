/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';
import { promises } from 'dns';
import { JwtPayload } from '../interfaces/jwt-payload';

@Injectable()
export class LoginGuard implements CanActivate {


  constructor(
    private jwtSevice: JwtService,
    private authService: AuthService,
  ){}

  // async canActivate(context: ExecutionContext,): Promise<boolean>{

  //   const request = context.switchToHttp().getRequest();
  //   const token = this.extractTokenFromHeader(request);

  //   if(!token){
  //     throw new UnauthorizedException('There is not a bearer token');
  //   }

  //   try {
  //     const payload = await this.jwtSevice.verifyAsync<JwtPayload>(
  //       token,
  //       {secret: process.env.JWT_SEED}
  //     );

  //     const user = await this.authService.greatAccesUser(payload.id);
  //     if (!user) throw new UnauthorizedException('User not found');
  //     if (!user.isActive) throw new UnauthorizedException('User is not active');

  //     request['user'] = user;
      
  //   } catch (error) {
  //     throw new UnauthorizedException();
  //   }

  //   return true;
  
  // }

  // metodo asincrono para permitir el login de un usuario mientras este activo sin requerir de un token
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assumed that user is set during the authentication process

    // Check if the user is active
    if (user && user.isActive) {
      return true; // Allow access
    }

    return false; // Deny access
  }

}
