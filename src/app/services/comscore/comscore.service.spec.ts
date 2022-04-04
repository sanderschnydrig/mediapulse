import { TestBed } from '@angular/core/testing';

import { ComscoreService } from './comscore.service';

describe('ComscoreService', () => {
  let service: ComscoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComscoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
