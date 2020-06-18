import { TestBed } from '@angular/core/testing';

import { VenserviceService } from './venservice.service';

describe('VenserviceService', () => {
  let service: VenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
