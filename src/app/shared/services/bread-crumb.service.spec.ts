import { TestBed } from '@angular/core/testing';

import { BreadCrumbService } from './bread-crumb.service';

describe('BreadcrumbService', () => {
  let service: BreadCrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadCrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
