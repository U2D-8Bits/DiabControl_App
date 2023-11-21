/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { JwtPayload } from '../interfaces/jwt-payload';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ){}


  async canActivate(context: ExecutionContext ): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    console.log({request});

    const token = this.extractTokenFromHeader(request);
    console.log({token});

    if (!token) {
      throw new UnauthorizedException('There is not a bearer token');
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(
        token,
        {secret: process.env.JWT_SEED}
      );

        const user = await this.authService.greatAccesUser(payload.id);
        if( !user) throw new UnauthorizedException('User not found');
        
        //condicion para que el usuario tenga el rol de admin
        if( !user.role.includes('admin')) throw new UnauthorizedException('User is not admin');
        if( !user.isActive ) throw new UnauthorizedException('User is not active');
        

      request['user'] = user;

    }catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
