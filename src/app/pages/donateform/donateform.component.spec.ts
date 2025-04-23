import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateformComponent } from './donateform.component';

describe('DonateformComponent', () => {
  let component: DonateformComponent;
  let fixture: ComponentFixture<DonateformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateformComponent]
    });
    fixture = TestBed.createComponent(DonateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
