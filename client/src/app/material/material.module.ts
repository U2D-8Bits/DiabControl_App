import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { MatNavList } from '@angular/material/list';


@NgModule({
  imports:[
    CommonModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    MatNavList
  ],
  exports: [
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    MatNavList
  ]
})
export class MaterialModule { }
