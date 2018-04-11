import { TestBed, inject } from '@angular/core/testing';

import { HiddenService } from './hidden.service';

describe('HiddenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiddenService]
    });
  });

  it('should be created', inject([HiddenService], (service: HiddenService) => {
    expect(service).toBeTruthy();
  }));
});
