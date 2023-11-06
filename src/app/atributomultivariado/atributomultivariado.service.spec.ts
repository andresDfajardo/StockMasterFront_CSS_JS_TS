import { TestBed } from '@angular/core/testing';

import { AtributomultivariadoService } from './atributomultivariado.service';

describe('AtributomultivariadoService', () => {
  let service: AtributomultivariadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtributomultivariadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
