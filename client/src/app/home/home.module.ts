import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MaterialModule } from '../material/material.module';
import { MenuItem } from 'primeng/api';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { EditFormPageComponent } from './pages/edit-form-page/edit-form-page.component';
import { CreateFormPageComponent } from './pages/create-form-page/create-form-page.component';
import { CreatePatientPageComponent } from './pages/create-patient-page/create-patient-page.component';
import { EditPatientPageComponent } from './pages/edit-patient-page/edit-patient-page.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    WelcomePageComponent,
    ChatPageComponent,
    SettingsPageComponent,
    InfoPageComponent,
    FormsPageComponent,
    PatientsPageComponent,
    EditFormPageComponent,
    CreateFormPageComponent,
    CreatePatientPageComponent,
    EditPatientPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    PrimengModule,
    MaterialModule,
  ],
  exports: [
    HomeLayoutComponent,
    WelcomePageComponent,
    ChatPageComponent,
    SettingsPageComponent,
    InfoPageComponent,
    FormsPageComponent,
    PatientsPageComponent,
  ]
})
export class HomeModule { }
