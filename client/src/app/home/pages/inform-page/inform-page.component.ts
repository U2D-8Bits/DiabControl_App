import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { AuthUserService } from '../../../auth/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-inform-page',
  templateUrl: './inform-page.component.html',
  styleUrls: ['./inform-page.component.css']
})
export class InformPageComponent implements OnInit {

  constructor(
    private userService: AuthUserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public patient?: User;

  ngOnInit() {
    console.log(`Se ha inicializado el componente`, this.constructor.name)

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.userService.getUserById(id) )
    ).subscribe( patientRecived => {
      if(!patientRecived) return this.router.navigate(['/home/pacientes']);


      this.patient = patientRecived;
      console.log({ patient: this.patient})
      return ;
    })


  }

  ngOnDestroy(): void {
    console.log(`Se ha destruido el componente`, this.constructor.name)
  }

}
