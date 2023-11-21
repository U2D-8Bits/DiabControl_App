import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MenuAuthComponent } from './components/menu-auth/menu-auth.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    MenuAuthComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error404PageComponent,
    MenuAuthComponent,
  ]
})
export class SharedModule { }
