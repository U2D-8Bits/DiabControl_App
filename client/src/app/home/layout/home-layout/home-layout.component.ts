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
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: '/home/bienvenido' },
      { label: 'Formularios', icon: 'pi pi-fw pi-clipboard', routerLink: '/home/formularios',},
      { label: 'Pacientes',icon: 'pi pi-fw pi-users',routerLink: '/home/pacientes',},
      { label: 'Chats', icon: 'pi pi-fw pi-comments', routerLink: '/home/chats' },
      { label: 'Mi Cuenta', icon: 'pi pi-user', routerLink: '/home/ajustes'},
    ]

  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomMenuComponent);
  }

}
