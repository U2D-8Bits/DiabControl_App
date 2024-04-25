import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import Swal from 'sweetalert2'
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReloadComponentService } from '../../services/reload-component.service';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-patient-view-page',
  templateUrl: './patient-view-page.component.html',
  styleUrl: './patient-view-page.component.css',
  providers: [ConfirmationService, MessageService],
})
export class PatientViewPageComponent implements OnInit {
  // ViewChild
  @ViewChild('editButton')  editButton!: Button;

  // Variables
  public patient?: User;
  public editInfo: boolean = false;

  constructor(
    private userService: AuthUserService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private reloadService: ReloadComponentService,

    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {

    console.log("NgOnInit PatientViewPageComponent Ready!");

    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.userService.getUserById(id)))
      .subscribe((user) => {
        if (!user) return this.router.navigate(['/home/patients']);
        this.patient = user;
        console.log('User Data => ', user);
        return;
      });
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit PatientViewPageComponent');
  }

  // Metodo para regresar a /home/pacientes
  goBack() {
    this.router.navigateByUrl('/home/pacientes');
  }

  // Metodo para cambiar el estado de los inputs a Diasabled = False
  enableInputs() {
    const inputs = document.querySelectorAll('input[pInputText]');
    inputs.forEach((input: Element) => {
      (input as HTMLInputElement).disabled = false;
    });
  }

  //Metodo para editar el paciente
  editPatient() {
    this.boolInfo();
    this.enableInputs();
  }

  // Metodo para cambiar el editInfo
  boolInfo(): void {
    this.editInfo = true;
    this.editButton.disabled = true;
  }

  // Metodo para cancelar la edit
  cancelEdit(event: Event) {
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
        // Incluimos el metodo reloadPage()
        this.reloadService.reloadComponent();
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


  ngOnDestroy(): void {
    console.log('Destroying PatientViewPageComponent');
  }
}
