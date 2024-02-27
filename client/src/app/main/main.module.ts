import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { InformsPageComponent } from './pages/informs-page/informs-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { MainRoutingModule } from './main-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    SettingsPageComponent,
    FormsPageComponent,
    InformsPageComponent,
    ChatPageComponent,
    WelcomePageComponent,
  ],
  imports: [
    CommonModule,

    MainRoutingModule,
    PrimeNgModule,

    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    MainLayoutComponent,
    SettingsPageComponent,
    FormsPageComponent,
    InformsPageComponent,
    ChatPageComponent,
    WelcomePageComponent,
  ]
})
export class MainModule { }
