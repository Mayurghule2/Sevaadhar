import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorrecordsComponent } from './donorrecords.component';

describe('DonorrecordsComponent', () => {
  let component: DonorrecordsComponent;
  let fixture: ComponentFixture<DonorrecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorrecordsComponent]
    });
    fixture = TestBed.createComponent(DonorrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
