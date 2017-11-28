import { TestBed, inject } from '@angular/core/testing';

import { UserTableServiceService } from './user-table-service.service';

describe('UserTableServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTableServiceService]
    });
  });

  it('should be created', inject([UserTableServiceService], (service: UserTableServiceService) => {
    expect(service).toBeTruthy();
  }));
});
