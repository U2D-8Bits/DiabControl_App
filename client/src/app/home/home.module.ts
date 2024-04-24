import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MaterialModule } from '../material/material.module';
import { MenuItem } from 'primeng/api';
import { CreateFormComponent } from './components/create-form/create-form.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    WelcomePageComponent,
    ChatPageComponent,
    SettingsPageComponent,
    InfoPageComponent,
    FormsPageComponent,
    DocsPageComponent,
    CreateFormComponent,
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
    DocsPageComponent,
    CreateFormComponent,
  ]
})
export class HomeModule { }
