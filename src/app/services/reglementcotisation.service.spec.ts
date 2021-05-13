import { TestBed } from '@angular/core/testing';

import { ReglementcotisationService } from './reglementcotisation.service';

describe('ReglementcotisationService', () => {
  let service: ReglementcotisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglementcotisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
