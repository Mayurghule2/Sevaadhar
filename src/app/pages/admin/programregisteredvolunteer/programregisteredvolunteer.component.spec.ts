import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramregisteredvolunteerComponent } from './programregisteredvolunteer.component';

describe('ProgramregisteredvolunteerComponent', () => {
  let component: ProgramregisteredvolunteerComponent;
  let fixture: ComponentFixture<ProgramregisteredvolunteerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramregisteredvolunteerComponent]
    });
    fixture = TestBed.createComponent(ProgramregisteredvolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
