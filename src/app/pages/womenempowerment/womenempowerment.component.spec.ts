import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenempowermentComponent } from './womenempowerment.component';

describe('WomenempowermentComponent', () => {
  let component: WomenempowermentComponent;
  let fixture: ComponentFixture<WomenempowermentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenempowermentComponent]
    });
    fixture = TestBed.createComponent(WomenempowermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
