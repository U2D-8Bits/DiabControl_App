import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})

export class AuthUserService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  //Filtrar a los usuarios solo por el rol numero 2
  getPatients(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?int_id_role=2`);
  }

}
