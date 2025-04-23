import { TestBed } from '@angular/core/testing';

import { ContactMessageService } from './contactmessage.service';

describe('ContactmessageService', () => {
  let service: ContactMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
