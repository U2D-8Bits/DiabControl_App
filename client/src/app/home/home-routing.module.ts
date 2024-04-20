import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {path: 'welcome', component: WelcomePageComponent},
      {path: 'chats', component: ChatPageComponent},
      {path: 'forms', component: FormsPageComponent},
      {path: 'informs', component: DocsPageComponent},
      {path: 'MyProfile', component: SettingsPageComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
