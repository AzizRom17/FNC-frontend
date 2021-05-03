import { TestBed } from '@angular/core/testing';

import { ArmechasseService } from './armechasse.service';

describe('ArmechasseService', () => {
  let service: ArmechasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmechasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
