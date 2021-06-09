import { TestBed } from '@angular/core/testing';

import { PostEmployeeService } from './post-employee.service';

describe('PostEmployeeService', () => {
  let service: PostEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
