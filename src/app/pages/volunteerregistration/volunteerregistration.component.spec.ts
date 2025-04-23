import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerregistrationComponent } from './volunteerregistration.component';

describe('VolunteerregistrationComponent', () => {
  let component: VolunteerregistrationComponent;
  let fixture: ComponentFixture<VolunteerregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerregistrationComponent]
    });
    fixture = TestBed.createComponent(VolunteerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
