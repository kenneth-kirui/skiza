import { TestBed } from '@angular/core/testing';

import { TunesService } from './tunes.service';

describe('TunesService', () => {
  let service: TunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
