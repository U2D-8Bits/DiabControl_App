import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import {MatButtonModule} from '@angular/material/button';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RecoverPageComponent } from './pages/recover-page/recover-page.component';
import { UnblockPageComponent } from './pages/unblock-page/unblock-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    PrimeNgModule,

    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthLayoutComponent,
    LoginPageComponent,
    RecoverPageComponent,
    UnblockPageComponent,
  ]
})
export class AuthModule { }
