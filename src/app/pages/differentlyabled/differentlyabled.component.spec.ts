import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentlyabledComponent } from './differentlyabled.component';

describe('DifferentlyabledComponent', () => {
  let component: DifferentlyabledComponent;
  let fixture: ComponentFixture<DifferentlyabledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifferentlyabledComponent]
    });
    fixture = TestBed.createComponent(DifferentlyabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
