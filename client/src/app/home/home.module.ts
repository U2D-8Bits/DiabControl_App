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
import { PatientViewPageComponent } from './pages/patient-view-page/patient-view-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { SharedModule } from '../shared/shared.module';

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
    PatientViewPageComponent,
    CreatePatientComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,

    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeLayoutComponent,
    WelcomePageComponent,
    ChatPageComponent,
    SettingsPageComponent,
    InfoPageComponent,
    FormsPageComponent,
    PatientsPageComponent,
    EditFormPageComponent,
    CreateFormPageComponent,
    PatientViewPageComponent,
    CreatePatientComponent,
  ]
})
export class HomeModule { }
