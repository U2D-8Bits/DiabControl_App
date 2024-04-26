import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // Declaramos el BehaviorSubject
  private userIdSource = new BehaviorSubject<number>(0);

  // Declaramos el observable
  currentUserId = this.userIdSource.asObservable();

  constructor() { }

  // Creamos un método para cambiar el valor del BehaviorSubject
  changeUserId(userId: number) {
    this.userIdSource.next(userId);
  }

}
