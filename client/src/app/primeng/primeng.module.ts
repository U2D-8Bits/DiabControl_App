import { NgModule } from '@angular/core';


import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';



@NgModule({
  exports:[
    ToolbarModule,
    ButtonModule
  ]
})
export class PrimengModule { }
