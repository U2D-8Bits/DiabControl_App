import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutPageComponent } from './pages/auth-layout-page/auth-layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UnblockUserPageComponent } from './pages/unblock-user-page/unblock-user-page.component';
import { RecoverPasswordPageComponent } from './pages/recover-password-page/recover-password-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutPageComponent,
    children: [
      {path:'login', component: LoginPageComponent},
      {path:'unblock-user', component: UnblockUserPageComponent},
      {path:'recover-password', component: RecoverPasswordPageComponent},
      {path:'**', redirectTo: 'login'}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
