import { TestBed } from '@angular/core/testing';

import { ForSaleService } from './for-sale.service';

describe('ForSaleService', () => {
  let service: ForSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
