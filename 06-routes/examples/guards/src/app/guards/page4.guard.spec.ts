import { TestBed, async, inject } from '@angular/core/testing';

import { Page4Guard } from './page4.guard';

describe('Page4Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page4Guard]
    });
  });

  it('should ...', inject([Page4Guard], (guard: Page4Guard) => {
    expect(guard).toBeTruthy();
  }));
});
