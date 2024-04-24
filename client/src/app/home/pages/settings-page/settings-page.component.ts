import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthUserService } from '../../../auth/services/user.service';

@Component({
  selector: 'home-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent implements OnInit{


  public users: User[] = [];
  constructor( private userService: AuthUserService) { }

  ngOnInit(): void {


    this.userService.getUsers()
    .subscribe( users => this.users = users)

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}
