import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.css']
})
export class PatientsPageComponent implements OnInit {

  public users: User[] = [];
  public patients: User[] = [];

  visible: boolean = false;

  constructor(
    private userService: AuthUserService,
  ) { }

  ngOnInit() {

    this.userService.getAllUsers()
    .subscribe((users: User[]) => {
      this.users = users;
      console.log("Usuarios =>", this.users);
    });

    this.userService.getPatients()
    // Usar subscribe y pipe
    .subscribe((patients: User[]) => {
      this.patients = patients;
      console.log("Pacientes =>", patients);
    });

  }

  showDialog() {
    this.visible = true;
  }

  ngOnDestroy(): void {
    console.log("Se destruyó el componente");
  }

}
