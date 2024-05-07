import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environments.baseUrl;
  private user?: User;

  //Obtener el usuario actual
  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  //Obtener todos los usuarios
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  //Filtrar a los usuarios solo por el rol numero 2 (Pacientes)
  getPatients(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?int_id_role=2`);
  }

  // Obtener un usuario por ID
  getUserById(id: string): Observable<User | undefined> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`).pipe(
      catchError((err) => {
        console.log('Error GetUserByID() =>', err);
        return of(undefined);
      })
    );
  }

  // ------------------- LOGIN ------------------------ //

  login(username: string, password: string): Observable<User> {
    // return this.http
    //   .post<User>(`${this.baseUrl}/users/login`, {
    //     str_username: username,
    //     str_password: password,
    //   })
    //   .pipe(
    //     map((user) => {
    //       this.user = user;
    //       return user;
    //     })
    //   );

    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( user => {this.user = user;}),
      tap( user => localStorage.setItem('token', '9sh9d8saa9d8y.s8dy9as8dy9s8dyas9a.9sd97as5d86as5'))
    )
  }

  checkAuthStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) return of(false);

    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( user => {this.user = user;}),
      map( user => !!user),
      catchError(err => {
        console.log('Error en checkAuthStatus() =>', err);
        return of(false);
      }),
    );
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem('token');
  }

  // ------------------- CRUD ------------------- //

  // Crear un nuevo usuario
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  // Actualizar un usuario
  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User not found');
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  //Cambiar el status de un usuario
  changeStatusUser(id: string, status: boolean): Observable<User> {
    if (id === '' || id === null) throw Error('User not found');
    if (status === null) throw Error('Status not found');
    return this.http.patch<User>(`${this.baseUrl}/users/${id}`, {
      bool_status_user: status,
    });
  }

  // Eliminar un usuario
  deleteUser(id: string): Observable<boolean> {
    return this.http.delete<User>(`${this.baseUrl}/users/${id}`).pipe(
      catchError((error) => of(false)),
      map((resp) => true)
    );
  }
}
