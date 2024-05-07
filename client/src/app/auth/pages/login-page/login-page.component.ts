import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{

  constructor(
    private authService: AuthUserService,
    private router: Router,
  ) {}

  // Metodo para iniciar sesion
  Onlogin():void{
    this.authService.login('admin', '123456')
    .subscribe( userData => {
        console.log('Usuario logueado', userData)
        this.router.navigate(['/home']);
    });
  }

  ngOnInit(): void {
    console.log(`Se ha inicializado el componente ${this.constructor.name}`)
  }

  ngOnDestroy(): void {
    console.log(`Se ha destruido el componente ${this.constructor.name}`)
  }

}
