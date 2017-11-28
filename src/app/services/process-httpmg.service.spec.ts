import { TestBed, inject } from '@angular/core/testing';

import { ProcessHttpmgService } from './process-httpmg.service';

describe('ProcessHttpmgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHttpmgService]
    });
  });

  it('should be created', inject([ProcessHttpmgService], (service: ProcessHttpmgService) => {
    expect(service).toBeTruthy();
  }));
});
