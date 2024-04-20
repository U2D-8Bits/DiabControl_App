import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';
import { UnblockPageComponent } from './pages/unblock-page/unblock-page.component';

const routes: Routes = [
  {
    path:'',
    component: AuthLayoutComponent,
    children:[
      {path: 'login', component: LoginPageComponent},
      {path: 'reset-password', component: ResetPageComponent},
      {path: 'unblock-account', component: UnblockPageComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login',}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
