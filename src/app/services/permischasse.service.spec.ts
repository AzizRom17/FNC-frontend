import { TestBed } from '@angular/core/testing';

import { PermischasseService } from './permischasse.service';

describe('PermischasseService', () => {
  let service: PermischasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermischasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
