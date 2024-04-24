import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { EditFormPageComponent } from './pages/edit-form-page/edit-form-page.component';
import { CreateFormPageComponent } from './pages/create-form-page/create-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'bienvenido', component: WelcomePageComponent },
      { path: 'chats', component: ChatPageComponent },
      { path: 'educacion', component: InfoPageComponent },
      { path: 'ajustes', component: SettingsPageComponent },
      { path: 'formularios', component: FormsPageComponent },
      { path: 'formularios/crear', component: CreateFormPageComponent},
      { path: 'formularios/:id', component: EditFormPageComponent},
      { path: 'pacientes', component: PatientsPageComponent },
      { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
