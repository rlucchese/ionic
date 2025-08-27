import { TestBed } from '@angular/core/testing';

import { DocumentoclienteService } from './documentocliente.service';

describe('DocumentoclienteService', () => {
  let service: DocumentoclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentoclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
