import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthUserService } from '../../../auth/services/user.service';

@Component({
  selector: 'home-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent implements OnInit{


  constructor() {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
