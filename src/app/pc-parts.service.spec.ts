import { TestBed } from '@angular/core/testing';

import { PcPartsService } from './pc-parts.service';

describe('PcPartsService', () => {
  let service: PcPartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcPartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
