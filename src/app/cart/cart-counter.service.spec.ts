import { TestBed } from '@angular/core/testing';

import { CartItemCountService } from './cart-item-count.service';

describe('CartCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartItemCountService = TestBed.get(CartItemCountService);
    expect(service).toBeTruthy();
  });
});
