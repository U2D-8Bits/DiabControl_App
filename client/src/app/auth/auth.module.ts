import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import {MatButtonModule} from '@angular/material/button';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RecoverPageComponent } from './pages/recover-page/recover-page.component';
import { UnblockPageComponent } from './pages/unblock-page/unblock-page.component';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

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
    MatButtonModule,

    SharedModule
  ],
  exports: [
    AuthLayoutComponent,
    LoginPageComponent,
    RecoverPageComponent,
    UnblockPageComponent,
  ]
})
export class AuthModule { }
