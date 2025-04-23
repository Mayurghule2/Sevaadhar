import { TestBed } from '@angular/core/testing';

import { ProgramApplicationService } from './program-application.service';

describe('ProgramApplicationService', () => {
  let service: ProgramApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
