import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientPageComponent } from './create-patient-page.component';

describe('CreatePatientPageComponent', () => {
  let component: CreatePatientPageComponent;
  let fixture: ComponentFixture<CreatePatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
