import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-patient-page',
  templateUrl: './create-patient-page.component.html',
  styleUrl: './create-patient-page.component.css'
})
export class CreatePatientPageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  // Creamos un formulario reactivo para el usuario
  userForm = this.formBuilder.group({
    str_username_user: ['', Validators.required],
    str_password_user: ['', [Validators.required, Validators.minLength(6)]],
    str_name_user:     ['', Validators.required],
    str_lastname_user: ['', Validators.required],
    str_email_user:    ['', Validators.required],
    str_phone_user:    ['', Validators.required],
    bool_status_user:  [true],
    int_id_role:       ['2'],
  });

  ngOnInit(): void {
    console.log("Formulario Validation =>", this.userForm.invalid);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(`ngAfterViewInit => ` + this.constructor.name + ` initialized`);
    console.log("Formulario Validation AfterInit =>", this.userForm.invalid);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy => ` + this.constructor.name + ` destroyed`);
  }
}
