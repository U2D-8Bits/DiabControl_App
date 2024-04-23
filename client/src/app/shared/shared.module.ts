import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
