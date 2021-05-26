import { TestBed } from '@angular/core/testing';

import { ReglementassuranceService } from './reglementassurance.service';

describe('ReglementassuranceService', () => {
  let service: ReglementassuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglementassuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
