import { TestBed } from '@angular/core/testing';

import { EtatcotisationService } from './etatcotisation.service';

describe('EtatcotisationService', () => {
  let service: EtatcotisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatcotisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
