import { TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [EducationComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EducationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-angular-16-app'`, () => {
    const fixture = TestBed.createComponent(EducationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-angular-16-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EducationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-angular-16-app app is running!');
  });
});
