import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationhistoryComponent } from './donationhistory.component';

describe('DonationhistoryComponent', () => {
  let component: DonationhistoryComponent;
  let fixture: ComponentFixture<DonationhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationhistoryComponent]
    });
    fixture = TestBed.createComponent(DonationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
