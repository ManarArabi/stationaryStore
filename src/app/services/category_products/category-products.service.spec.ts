import { TestBed } from '@angular/core/testing';

import { CategoryProductsService } from './category-products.service';

describe('CategoryProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryProductsService = TestBed.get(CategoryProductsService);
    expect(service).toBeTruthy();
  });
});
