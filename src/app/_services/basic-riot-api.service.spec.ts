import { TestBed } from '@angular/core/testing';

import { BasicRiotApiService } from './basic-riot-api.service';

describe('BasicRiotApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicRiotApiService = TestBed.get(BasicRiotApiService);
    expect(service).toBeTruthy();
  });
});
