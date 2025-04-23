import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingsectionComponent } from './fundingsection.component';

describe('FundingsectionComponent', () => {
  let component: FundingsectionComponent;
  let fixture: ComponentFixture<FundingsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundingsectionComponent]
    });
    fixture = TestBed.createComponent(FundingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
