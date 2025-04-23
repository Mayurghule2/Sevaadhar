import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitydevelopmentComponent } from './communitydevelopment.component';

describe('CommunitydevelopmentComponent', () => {
  let component: CommunitydevelopmentComponent;
  let fixture: ComponentFixture<CommunitydevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitydevelopmentComponent]
    });
    fixture = TestBed.createComponent(CommunitydevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
