import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthUserService } from '../../../auth/services/user.service';

@Component({
  selector: 'home-info-page',
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export class InfoPageComponent implements OnInit {


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
