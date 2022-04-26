import { TestBed } from '@angular/core/testing';

import { ReporteDeServicioService } from './reporte-de-servicio.service';

describe('ReporteDeServicioService', () => {
  let service: ReporteDeServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteDeServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
