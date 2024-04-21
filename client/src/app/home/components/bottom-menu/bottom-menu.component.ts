import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { HomeLayoutComponent } from '../../layout/home-layout/home-layout.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  standalone: true,
  imports: [MatListModule, RouterLink, ButtonModule, MenuModule],
})
export class BottomMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomMenuComponent>
  ) {}

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: '/home/welcome' },
      { label: 'Formulario', icon: 'pi pi-fw pi-clipboard', routerLink: '/home/forms',},
      { label: 'Informes',icon: 'pi pi-fw pi-book',routerLink: '/home/informs',},
      { label: 'Chats', icon: 'pi pi-fw pi-comments', routerLink: '/home/chats' },
      { label: 'Acerca',icon: 'pi pi-fw pi-book',routerLink: '/home/education',},
    ];
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
