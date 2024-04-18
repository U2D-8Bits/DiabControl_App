import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RecoverPageComponent } from './pages/recover-page/recover-page.component';
import { UnblockPageComponent } from './pages/unblock-page/unblock-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    RecoverPageComponent,
    UnblockPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [
    AuthLayoutComponent,
    LoginPageComponent,
    RecoverPageComponent,
    UnblockPageComponent,
  ]
})
export class AuthModule { }
