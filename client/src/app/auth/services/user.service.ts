import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})

export class AuthUserService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  //Obtener todos los usuarios
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  //Filtrar a los usuarios solo por el rol numero 2 (Pacientes)
  getPatients(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?int_id_role=2`);
  }

  // Obtener un usuario por ID
  getUserById(id: string): Observable <User | undefined>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
      .pipe(
        catchError(err => {
          console.log("Error GetUserByID() =>",err);
          return of (undefined);
        })
      )
  }

}
