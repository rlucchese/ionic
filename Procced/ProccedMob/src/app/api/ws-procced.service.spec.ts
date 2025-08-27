import { TestBed } from '@angular/core/testing';

import { WsProccedService } from './ws-procced.service';

describe('WsProccedService', () => {
  let service: WsProccedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsProccedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
