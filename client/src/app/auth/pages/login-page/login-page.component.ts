import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  public myForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(8)]]
  })

  constructor() { }


  // Metodo Login
  login(){
    const { username, password } = this.myForm.value;

    this.authService.login(username, password)
      .subscribe( success =>{
        console.log({success});
      });
  }

}
