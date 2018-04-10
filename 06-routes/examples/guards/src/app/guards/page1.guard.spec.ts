import { TestBed, async, inject } from '@angular/core/testing';

import { Page1Guard } from './page1.guard';

describe('Page1Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page1Guard]
    });
  });

  it('should ...', inject([Page1Guard], (guard: Page1Guard) => {
    expect(guard).toBeTruthy();
  }));
});
