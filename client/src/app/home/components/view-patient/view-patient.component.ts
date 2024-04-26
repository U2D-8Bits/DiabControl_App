import { AuthUserService } from './../../../auth/services/user.service';
import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'home-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent implements OnInit  {

  constructor(
    private UserDataService: UserDataService,
    private AuthUserService: AuthUserService
  ){}

  patient?: User;

  ngOnInit(): void {
    console.log(`Se inicializó el componente ${this.constructor.name}` );

    this.UserDataService.currentUserId
      .subscribe( userID => {

        console.log(`UserID => ${userID}`);
        // Obtener el paciente por ID de AuthService
        this.AuthUserService.getUserById(userID.toString())
          .subscribe( patientRevice => {
            console.log('Patient Recived =>', patientRevice);
            this.patient = patientRevice;
        })

      })

  }

  ngOnDestroy(): void {
    console.log(`Se destruyo el componente ${this.constructor.name}` );
  }

}
