import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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

  // ----------------------------------------------------------------

  // Crear un nuevo usuario
  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  // Actualizar un usuario
  updateUser(user: User): Observable<User>{
    if(!user.id) throw Error("User not found")
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  //Cambiar el estado de un usuario
  changeStatusUser(user: User): Observable<User>{
    if(!user.id) throw Error("User not found")
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  // Eliminar un usuario
  deleteUser(id: string): Observable<boolean>{

    return this.http.delete<User>(`${this.baseUrl}/users/${id}`)
      .pipe(
        catchError( error => of(false)),
        map( resp => true)
      );
  }

}
