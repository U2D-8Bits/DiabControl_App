import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    HeaderAuthComponent,
    HeaderMainComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error404PageComponent,
    HeaderAuthComponent,
    HeaderMainComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
