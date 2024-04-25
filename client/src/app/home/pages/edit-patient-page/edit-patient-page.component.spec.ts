import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientPageComponent } from './edit-patient-page.component';

describe('EditPatientPageComponent', () => {
  let component: EditPatientPageComponent;
  let fixture: ComponentFixture<EditPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
