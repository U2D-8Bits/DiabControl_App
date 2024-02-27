import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformsPageComponent } from './informs-page.component';

describe('InformsPageComponent', () => {
  let component: InformsPageComponent;
  let fixture: ComponentFixture<InformsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformsPageComponent]
    });
    fixture = TestBed.createComponent(InformsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
