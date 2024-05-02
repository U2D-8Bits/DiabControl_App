import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserDataService } from '../../services/user-data.service';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreatePatientComponent } from '../../components/create-patient/create-patient.component';
import { ViewPatientComponent } from '../../components/view-patient/view-patient.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.css'],
  providers: [DialogService, ConfirmationService, MessageService],
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
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log(`Se inicializado el componente ${this.constructor.name}`);

    this.userService.getPatients().subscribe((patients: User[]) => {
      this.patients = patients;
      console.log('Pacientes =>', patients);
    });
  }

  // Método para mostrar la ventana modal
  showDialog(componentName: string, headerText: string) {
    // Mostrar componente registrar paciente
    if (componentName === 'create') {
      this.ref = this.dialogService.open(CreatePatientComponent, {
        header: headerText,
        width: '70%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
      });
    }
    // Mostrar componente ver/editar paciente
    if (componentName === 'view') {
      this.ref = this.dialogService.open(ViewPatientComponent, {
        header: headerText,
        width: '70%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
      });
    }
  }

  // Método para enviar el id del usuario seleccionado
  sendUserID(id: number) {
    this.userDataService.changeUserId(id);
  }

  // Metodo para cambiar el estado del usuario
  changeStatusUser(id: string, event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Esta seguro de realizar esta acción con el paciente?',
      header: 'Cambiar estado del paciente',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Comfirmado',
          detail: 'Se ha cambiado el estado',
        });

        this.userService.getUserById(id).subscribe((user) => {
          console.log(`UserData Recive =>`, user);
          const statusChanged = user?.bool_status_user ? false : true;

          this.userService
            .changeStatusUser(id, statusChanged)
            .subscribe((user) => {
              console.log(`Status Changed =>`, user);
              this.ngOnInit();
            });
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Denegado',
          detail: 'Ha rechazado la acción',
          life: 3000,
        });
      },
    });
  }

  deleteUser(id: string, event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Esta seguro de realizar esta acción con el paciente?',
      header: 'Eliminar paciente',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Comfirmado',
          detail: 'Se ha eliminado el paciente correctamente',
        });

        this.userService.getUserById(id).subscribe((user) => {
          console.log(`UserData Recive =>`, user);
          this.userService.deleteUser(id).subscribe((user) => {
            console.log(`User Deleted =>`, user);
            this.ngOnInit();
          });
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Denegado',
          detail: 'No se ha eliminado el paciente',
          life: 3000,
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.dialogComponentSubscription?.unsubscribe();
    console.log(`Se ha destruido el componente ${this.constructor.name}`);
  }
}
