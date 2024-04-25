import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import Swal from 'sweetalert2'
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-patient-view-page',
  templateUrl: './patient-view-page.component.html',
  styleUrl: './patient-view-page.component.css',
  providers: [ConfirmationService, MessageService],
})
export class PatientViewPageComponent implements OnInit {
  // Variables
  public patient?: User;
  private id?: string;
  public editInfo: boolean = false;

  constructor(
    private userService: AuthUserService,
    private activeRoute: ActivatedRoute,
    private router: Router,

    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.userService.getUserById(id)))
      .subscribe((user) => {
        if (!user) return this.router.navigate(['/home/patients']);
        this.patient = user;
        console.log('User Data => ', user);
        return;
      });
  }

  // Metodo para regresar a /home/pacientes
  goBack() {
    this.router.navigateByUrl('/home/pacientes');
  }

  //Metodo para editar el paciente
  editPatient() {
    // Quitamos el [disabled]="true" a todos los p-button
    const nameUser = document.getElementById('nameUser');
    if (nameUser) nameUser.removeAttribute('disabled');
    if (nameUser) nameUser.setAttribute('required', 'true');

    const lastanameUser = document.getElementById('lastnameUser');
    if (lastanameUser) lastanameUser.removeAttribute('disabled');
    if (lastanameUser) lastanameUser.setAttribute('required', 'true');

    const phoneUser = document.getElementById('phoneUser');
    if (phoneUser) phoneUser.removeAttribute('disabled');
    if (phoneUser) phoneUser.setAttribute('required', 'true');

    const emailUser = document.getElementById('emailUser');
    if (emailUser) emailUser.removeAttribute('disabled');
    if (emailUser) emailUser.setAttribute('required', 'true');

    const passwordUser = document.getElementById('passwordUser');
    if (passwordUser) passwordUser.removeAttribute('disabled');
    if (passwordUser) passwordUser.setAttribute('required', 'true');

    const usernameUser = document.getElementById('usernameUser');
    if (usernameUser) usernameUser.removeAttribute('disabled');
    if (usernameUser) usernameUser.setAttribute('required', 'true');

    // Modificamos el editInfo a True
    this.boolInfo();
  }

  // Metodo para cambiar el editInfo
  boolInfo(): void {
    this.editInfo = true;
    const editButton = document.querySelector('#editButton');
    if (editButton) editButton.setAttribute('disabled', 'true');
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
        this.reloadPage();
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

  // Metodo para recargar la paginación
  reloadPage() {
    let currentUrl = this.router.url;
    console.log("UrlActual =>",currentUrl);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  ngOnDestroy(): void {
    console.log('Destroying PatientViewPageComponent');
  }
}
