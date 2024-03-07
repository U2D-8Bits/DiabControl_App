import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { FormsPageComponent } from "./pages/forms-page/forms-page.component";
import { InformsPageComponent } from "./pages/informs-page/informs-page.component";
import { ChatPageComponent } from "./pages/chat-page/chat-page.component";
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

// Importacion de Paginas

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path:'', component: WelcomePageComponent},
      {path: 'settings', component: SettingsPageComponent},
      {path:'forms', component: FormsPageComponent},
      {path:'informs', component: InformsPageComponent},
      {path:'chat', component: ChatPageComponent},
      {path:'about', component: AboutPageComponent},
      {path:'**', redirectTo:''},
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {}
