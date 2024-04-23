
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';
import { UnblockPageComponent } from './pages/unblock-page/unblock-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    ResetPageComponent,
    UnblockPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    PrimengModule
  ],
  exports:[
    AuthLayoutComponent,
    LoginPageComponent,
    ResetPageComponent,
    UnblockPageComponent
  ]
})
export class AuthModule { }
