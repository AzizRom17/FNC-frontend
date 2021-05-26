import { TestBed } from '@angular/core/testing';

import { EtatassuranceService } from './etatassurance.service';

describe('EtatassuranceService', () => {
  let service: EtatassuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatassuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
