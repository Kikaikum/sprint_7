import { TestBed } from '@angular/core/testing';

import { CalculoTotalService } from './calculo-total.service';

describe('CalculoTotalService', () => {
  let service: CalculoTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
