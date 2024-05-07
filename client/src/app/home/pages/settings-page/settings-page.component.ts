import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthUserService } from '../../../auth/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent implements OnInit{


  constructor(
    private authService: AuthUserService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  onLogout():void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
  }

}
