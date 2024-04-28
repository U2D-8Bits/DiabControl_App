import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.css'],
})
export class PatientsPageComponent implements OnInit {

  patients: User[] = [];

  visible: boolean = false;
  dialogComponent: string = ''; // Variable para almacenar el nombre del componente que se debe mostrar
  dialogHeader: string = '';

  private dialogComponentSubscription?: Subscription;
  // public create: string = "home-create-patient";

  constructor(
    private userService: AuthUserService,
    private userDataService: UserDataService,
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
    this.dialogComponent = componentName; // Asigna el nombre del componente que se debe mostrar
    this.dialogHeader = headerText;
    this.visible = true; // Muestra el diálogo
  }

  sendUserID(id:number){
    this.userDataService.changeUserId(id);
    console.log("Valor de ID obtenido =>", id);
  }


  ngOnDestroy(): void {
    this.dialogComponentSubscription?.unsubscribe();
    console.log(`Se ha destruido el componente ${this.constructor.name}`);
  }
}
