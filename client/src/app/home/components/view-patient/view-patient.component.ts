import { AuthUserService } from './../../../auth/services/user.service';
import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../auth/interfaces/user.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { ReloadComponentService } from '../../services/reload-component.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { delay } from 'rxjs';

@Component({
  selector: 'home-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css',
  providers: [ConfirmationService, MessageService],
})
export class ViewPatientComponent implements OnInit {
  @ViewChild('editButton') editButton!: Button;

  constructor(
    private UserDataService: UserDataService,
    private AuthUserService: AuthUserService,
    private fb: FormBuilder,
    private reloadService: ReloadComponentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  // Variables
  idPatient: string = '';
  patientData?: User;
  editInfo: boolean = false;
  myForm!: FormGroup;
  editButtonDisabled: boolean = false;

  ngOnInit(): void {
    console.log(`Se inicializó el componente ${this.constructor.name}`);

    // Obtenemos el ID del paciente
    this.UserDataService.currentUserId.subscribe((userID) => {
      console.log(`UserID => ${userID}`);
      this.idPatient = userID.toString();
    });

    this.myForm = this.fb.group({
      str_username_user: [{ value: '', disabled: true }, Validators.required],
      str_password_user: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(6)]],
      str_name_user: [{ value: '', disabled: true }, Validators.required],
      str_lastname_user: [{ value: '', disabled: true }, Validators.required],
      str_email_user: [{ value: '', disabled: true }, Validators.required],
      str_phone_user: [{ value: '', disabled: true }, Validators.required],
      bool_status_user: [true],
      int_id_role: ['2'],
    });

    // Obtenemos el paciente por el ID
    this.AuthUserService.getUserById(this.idPatient)
    .subscribe((userRecive) => {
      this.patientData = userRecive;
      if (userRecive) {
        this.myForm?.patchValue(userRecive);
      }
    });

  }

  //Metodo para editar el paciente
  editPatient(): void {
    this.boolInfo();
    this.myForm.enable();
  }

  // Metodo para cambiar el editInfo
  boolInfo(): void {
    this.editInfo = true;
    this.editButtonDisabled = true;
  }

  // Metodo para guardar los cambios del paciente
  savePatient(event: Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Desea guardar los cambios realizados?',
      header: 'Guardar Cambios',
      icon: 'pi pi-info-circle',
      rejectButtonStyleClass: 'p-button-secondary',
      acceptButtonStyleClass: 'p-button-secondary',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',

      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Guardado',
          detail: 'Cambios Guardados',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rechazado',
          detail: 'Cambios no guardados',
        });
      },
    });

  }

  // Metodo para cancelar la edit
  cancelEdit(event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Desea cancelar la operación actual?',
      header: 'Cancelar Edición',
      icon: 'pi pi-info-circle',
      rejectButtonStyleClass: 'p-button-secondary',
      acceptButtonStyleClass: 'p-button-secondary',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Edición Cancelada',
        });
        this.AuthUserService.getUserById(this.idPatient)
        .pipe(delay(1000))
        .subscribe((userRecive) => {
          if (userRecive) {
            this.myForm?.patchValue(userRecive);
          }
          this.editInfo = false;
          this.myForm.disable();
          this.editButtonDisabled = true;
        });

      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rechazado',
          detail: 'Continuando Edición',
        });
      },
    });
  }

  onSubmit(): void {
    console.log({
      formIsValid: this.myForm.valid,
      value: this.myForm.value,
    })
  }

  ngOnDestroy(): void {
    console.log(`Se destruyo el componente ${this.constructor.name}`);
  }
}
