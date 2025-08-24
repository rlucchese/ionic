import { TestBed } from '@angular/core/testing';

import { LoadSetupGuard } from './load-setup.guard';

describe('LoadSetupGuard', () => {
  let guard: LoadSetupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadSetupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
