import { TestBed } from '@angular/core/testing';

import { LoadingGuard } from './loading-guard';

describe('LoadingGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingGuard = TestBed.get(LoadingGuard);
    expect(service).toBeTruthy();
  });
});
