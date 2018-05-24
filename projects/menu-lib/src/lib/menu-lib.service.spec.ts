import { TestBed, inject } from '@angular/core/testing';

import { MenuLibService } from './menu-lib.service';

describe('MenuLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuLibService]
    });
  });

  it('should be created', inject([MenuLibService], (service: MenuLibService) => {
    expect(service).toBeTruthy();
  }));
});
