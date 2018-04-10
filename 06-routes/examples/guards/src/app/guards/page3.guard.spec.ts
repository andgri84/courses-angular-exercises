import { TestBed, async, inject } from '@angular/core/testing';

import { Page3Guard } from './page3.guard';

describe('Page3Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page3Guard]
    });
  });

  it('should ...', inject([Page3Guard], (guard: Page3Guard) => {
    expect(guard).toBeTruthy();
  }));
});
