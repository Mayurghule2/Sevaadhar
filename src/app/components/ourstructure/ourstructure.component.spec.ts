import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstructureComponent } from './ourstructure.component';

describe('OurstructureComponent', () => {
  let component: OurstructureComponent;
  let fixture: ComponentFixture<OurstructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurstructureComponent]
    });
    fixture = TestBed.createComponent(OurstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
