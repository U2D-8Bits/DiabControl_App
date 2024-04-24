import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-patient-view-page',
  templateUrl: './patient-view-page.component.html',
  styleUrl: './patient-view-page.component.css'
})
export class PatientViewPageComponent implements OnInit {

  public patient?: User;

  constructor(
    private userService: AuthUserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ){}

 ngOnInit(): void {

    this.activeRoute.params
    .pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    ).subscribe( user => {

      if(!user) return this.router.navigate(['/home/patients']);
      this.patient = user;
      console.log("User Data => ", user);
      return;
    });
 }

 ngOnDestroy(): void {
  console.log("Destroying PatientViewPageComponent");
 }

}
