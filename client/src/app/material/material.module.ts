import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
