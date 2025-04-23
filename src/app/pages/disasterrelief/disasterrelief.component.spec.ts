import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterreliefComponent } from './disasterrelief.component';

describe('DisasterreliefComponent', () => {
  let component: DisasterreliefComponent;
  let fixture: ComponentFixture<DisasterreliefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisasterreliefComponent]
    });
    fixture = TestBed.createComponent(DisasterreliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
