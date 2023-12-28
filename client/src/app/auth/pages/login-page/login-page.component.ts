import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  public myForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]]
  })

  constructor() { }


  // Metodo Login
  login(){
    const { username, password } = this.myForm.value;

    this.authService.login(username, password)
      .subscribe({
        next: () => {
          Swal.fire({
            title: 'Bienvenido!',
            text: 'Iniciando sesion',
            icon: 'success',
            confirmButtonColor: '#3B82F6',
            confirmButtonText: 'Ok'
          })
        },
        error: (errorMessage) => {
          if(errorMessage === 'Internal server error' ){
            Swal.fire({
              title: 'Usuario Incorrecto',
              text: 'Nombre de usuario incorrecto',
              icon: 'error',
              confirmButtonColor: '#3B82F6',
              confirmButtonText: 'Ok'
            })
          }
          if(errorMessage === 'Wrong password'){
            Swal.fire({
              title: 'Contraseña Incorrecta',
              text: 'Asegurese que su contraseña sea la correcta',
              icon: 'error',
              confirmButtonColor: '#3B82F6',
              confirmButtonText: 'Ok'
            })
          }
          if(errorMessage === 'User is not active'){
            Swal.fire({
              title: 'Usuario Bloqueado',
              text: 'Su usuario se encuentra bloqueado, solicite desbloqueo',
              icon: 'warning',
              confirmButtonColor: '#3B82F6',
              confirmButtonText: 'Ok'
            })
          }
        }
      });
  }

}
