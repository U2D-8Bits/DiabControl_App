import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environments';
import { AuthStatus, LoginResponse, User } from '../interfaces';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private readonly baseUrl : string = environment.urlApi;
  // private http = inject( HttpClient);

  // private _currentUser = signal<User|null>(null);
  // private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // public currentUser = computed( () => this._currentUser() );
  // public authStatus = computed( () => this._authStatus() );

  // constructor() { }

  // login( username:string, password:string ): Observable<boolean>{

  //   const url = `${this.baseUrl}/auth/login`;
  //   const body = { username, password };

  //   return this.http.post<LoginResponse>(url, body)
  //     .pipe(
  //       tap( ({ user, token}) => {
  //         this._currentUser.set(user);
  //         this._authStatus.set(AuthStatus.authenticated);
  //         localStorage.setItem('token', token);

  //         console.log({user, token});
  //       }),
  //       map( () => true ),

  //       // Todo: Errores
  //       catchError( error => {
  //         console.log({error});
  //         return throwError( () => error.error.message );
  //       })
  //     );
  // }

}
