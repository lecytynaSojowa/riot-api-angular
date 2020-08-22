import { TestBed } from '@angular/core/testing';

import { MatchInfoResolverService } from './match-info-resolver.service';

describe('MatchInfoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchInfoResolverService = TestBed.get(MatchInfoResolverService);
    expect(service).toBeTruthy();
  });
});
