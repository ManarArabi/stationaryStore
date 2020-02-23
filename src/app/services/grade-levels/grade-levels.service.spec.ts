import { TestBed } from '@angular/core/testing';

import { GradeLevelsService } from './grade-levels.service';

describe('GradeLevelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradeLevelsService = TestBed.get(GradeLevelsService);
    expect(service).toBeTruthy();
  });
});
