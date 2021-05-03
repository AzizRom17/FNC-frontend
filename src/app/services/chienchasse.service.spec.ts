import { TestBed } from '@angular/core/testing';

import { ChienchasseService } from './chienchasse.service';

describe('ChienchasseService', () => {
  let service: ChienchasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChienchasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
