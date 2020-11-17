import { TestBed } from '@angular/core/testing';

import { DragonDataService } from './dragon-data.service';

describe('DragonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragonDataService = TestBed.get(DragonDataService);
    expect(service).toBeTruthy();
  });
});
