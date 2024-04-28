import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReloadComponentService } from '../../services/reload-component.service';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'home-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css',
  providers: [ConfirmationService, MessageService],
})
export class CreatePatientComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private reloadService: ReloadComponentService,
    private userService: AuthUserService
  ) {}

  myForm = this.fb.group({
    str_username_user: ['', Validators.required],
    str_password_user: ['', [Validators.required, Validators.minLength(6)]],
    str_name_user: ['', Validators.required],
    str_lastname_user: ['', Validators.required],
    str_email_user: ['', Validators.required],
    str_phone_user: ['', Validators.required],
    bool_status_user: [true],
    int_id_role: ['2'],
  });

  ngOnInit() {
    console.log(`Se inicializó el componente ${this.constructor.name}` );
  }

  get currentPatient(): User {
    const patient = this.myForm.value as User;
    return patient;
  }

  // Metodo para guardar el paciente
  savePatient(event: Event): void {

    const patientData = this.myForm.value;
    console.log('Guardando paciente =>', patientData);

    console.log('Guardando paciente');
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Esta seguro que desea registrar este paciente?',
      header: 'Confirmation',
      icon: 'pi pi-question-circle',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Paciente registrado',
          life: 1500,
        });

        this.userService.createUser(this.currentPatient)
        .subscribe(
          (response) => {
            console.log('Respuesta del servidor =>', response);
          },
          (error) => {
            console.error('Error en el servidor =>', error);
          }
        )

        this.reloadService.reloadComponent();
        this.myForm.reset();
      },
      reject: () => {
        this.messageService.add({
          severity: 'warning',
          summary: 'Rechazado',
          detail: 'Paciente no registrado',
          life: 1500,
        });
      },
    });
  }

  // Metodo para cancelar la accion
  cancelAction(event: Event): void {
    console.log('Cancelando acción');
    this.confirmationService.confirm({
      message: 'Esta seguro que desea cancelar la acción?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Acción cancelada',
          life: 1500,
        });
        this.reloadService.reloadComponent();
      },
      reject: () => {
        this.messageService.add({
          severity: 'warning',
          summary: 'Rechazado',
          detail: 'Acción no cancelada',
          life: 1500,
        });
      },
    });
  }

  ngOnDestroy(): void {
    console.log(`Se destruyó el componente  ${this.constructor.name}`);
  }
}
