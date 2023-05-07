import { TestBed } from '@angular/core/testing';

import { V2vHttpResponseInterceptor } from './http-response.interceptor';

describe('HttpResponseInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [V2vHttpResponseInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: V2vHttpResponseInterceptor = TestBed.inject(
      V2vHttpResponseInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
