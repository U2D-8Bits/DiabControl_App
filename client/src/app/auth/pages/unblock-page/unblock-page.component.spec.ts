import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockPageComponent } from './unblock-page.component';

describe('UnblockPageComponent', () => {
  let component: UnblockPageComponent;
  let fixture: ComponentFixture<UnblockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnblockPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnblockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
