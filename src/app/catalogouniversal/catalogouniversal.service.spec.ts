import { TestBed } from '@angular/core/testing';

import { CatalogoUniversalService } from './catalogouniversal.service';

describe('CatalogouniversalService', () => {
  let service: CatalogoUniversalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoUniversalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
