import { TestBed } from '@angular/core/testing';

import { PoliceServiceService } from './police-service.service';

describe('PoliceServiceService', () => {
  let service: PoliceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
