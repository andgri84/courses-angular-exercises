import { TestBed, async, inject } from '@angular/core/testing';

import { Page2Guard } from './page2.guard';

describe('Page2Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page2Guard]
    });
  });

  it('should ...', inject([Page2Guard], (guard: Page2Guard) => {
    expect(guard).toBeTruthy();
  }));
});
