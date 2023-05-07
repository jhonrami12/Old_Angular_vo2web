import { TestBed } from '@angular/core/testing';

import { V2vProjectService } from './project.service';

describe('ProjectService', () => {
  let service: V2vProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V2vProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
