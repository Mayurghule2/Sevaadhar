import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweventvoulnteerregformComponent } from './neweventvoulnteerregform.component';

describe('NeweventvoulnteerregformComponent', () => {
  let component: NeweventvoulnteerregformComponent;
  let fixture: ComponentFixture<NeweventvoulnteerregformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeweventvoulnteerregformComponent]
    });
    fixture = TestBed.createComponent(NeweventvoulnteerregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
