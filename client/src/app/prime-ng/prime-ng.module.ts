import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { SpeedDialModule } from 'primeng/speeddial';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    SpeedDialModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    SpeedDialModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
