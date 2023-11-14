import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutPageComponent } from './pages/auth-layout-page/auth-layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RecoverPasswordPageComponent } from './pages/recover-password-page/recover-password-page.component';
import { UnblockUserPageComponent } from './pages/unblock-user-page/unblock-user-page.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AuthLayoutPageComponent,
    LoginPageComponent,
    RecoverPasswordPageComponent,
    UnblockUserPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNgModule,
    MatButtonModule
  ],
  exports: [
    AuthLayoutPageComponent,
    LoginPageComponent,
    RecoverPasswordPageComponent,
    UnblockUserPageComponent,
  ]
})
export class AuthModule { }
