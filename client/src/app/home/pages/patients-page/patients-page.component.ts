import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserDataService } from '../../services/user-data.service';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreatePatientComponent } from '../../components/create-patient/create-patient.component';
import { ViewPatientComponent } from '../../components/view-patient/view-patient.component';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.css'],
  providers: [DialogService],
})
export class PatientsPageComponent implements OnInit {

  patients: User[] = [];

  visible: boolean = false;
  dialogComponent: string = ''; // Variable para almacenar el nombre del componente que se debe mostrar
  dialogHeader: string = '';

  private dialogComponentSubscription?: Subscription;
  ref: DynamicDialogRef | undefined;


  constructor(
    private userService: AuthUserService,
    private userDataService: UserDataService,
    public dialogService: DialogService,
  ) {}

  ngOnInit() {

    console.log(`Se inicializado el componente ${this.constructor.name}`);

    this.userService.getPatients()
      // Usar subscribe y pipe
      .subscribe((patients: User[]) => {
        this.patients = patients;
        console.log('Pacientes =>', patients);
      });

  }

  showDialog(componentName: string, headerText: string){
    if(componentName === 'create'){
      this.ref = this.dialogService.open(CreatePatientComponent, {
        header: headerText,
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
      });
    }

    if(componentName === 'view'){
      this.ref = this.dialogService.open(ViewPatientComponent, {
        header: headerText,
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
      });
    }
  }

  sendUserID(id:number){
    this.userDataService.changeUserId(id);
  }

  changeStatusUser(id: string) {
    this.userService.getUserById(id)
    .subscribe( user => {
      console.log(`UserData Recive =>`, user);
      const statusChanged = user?.bool_status_user ? false : true;

      this.userService.changeStatusUser(id, statusChanged)
        .subscribe( user => {
          console.log(`Status Changed =>`, user);
          this.ngOnInit();
        })
    })
  }

  deleteUser(id: string): void {

    this.userService.deleteUser(id)
      .subscribe( user => {
        console.log(`User Deleted =>`, user);
        this.ngOnInit();
      });
  }


  ngOnDestroy(): void {
    this.dialogComponentSubscription?.unsubscribe();
    console.log(`Se ha destruido el componente ${this.constructor.name}`);
  }
}
