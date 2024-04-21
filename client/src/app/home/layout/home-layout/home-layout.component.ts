import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { MenuItem } from 'primeng/api';
import { BottomMenuComponent } from '../../components/bottom-menu/bottom-menu.component';



@Component({
  selector: 'home-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent implements OnInit {


  constructor(private _bottomSheet: MatBottomSheet) {}

  userItems: MenuItem[] | undefined;

  ngOnInit() {

    this.userItems = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: '/home/welcome' },
      { label: 'Formulario', icon: 'pi pi-fw pi-clipboard', routerLink: '/home/forms',},
      { label: 'Informes',icon: 'pi pi-fw pi-book',routerLink: '/home/informs',},
      { label: 'Chats', icon: 'pi pi-fw pi-comments', routerLink: '/home/chats' },
      { label: 'Acerca',icon: 'pi pi-fw pi-book',routerLink: '/home/education',},
      // {
      //   icon: 'pi pi-cog',
      //   items:[
      //     {label: "Mi Cuenta", icon:'pi pi-id-card', routerLink: '/home/settings'},
      //     {label: "Salir", icon:'pi pi-sign-out', routerLink:'/auth/'}
      //   ]
      // }
    ]


  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomMenuComponent);
  }

}
