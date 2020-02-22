import { TestBed } from '@angular/core/testing';

import { RequestDataService } from './request-data.service';

describe('RequestDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestDataService = TestBed.get(RequestDataService);
    expect(service).toBeTruthy();
  });
});
