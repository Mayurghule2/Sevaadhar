import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodnutritionComponent } from './foodnutrition.component';

describe('FoodnutritionComponent', () => {
  let component: FoodnutritionComponent;
  let fixture: ComponentFixture<FoodnutritionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodnutritionComponent]
    });
    fixture = TestBed.createComponent(FoodnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
