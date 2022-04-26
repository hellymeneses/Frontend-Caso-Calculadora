import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeServicioComponent } from './reporte-de-servicio.component';

describe('ReporteDeServicioComponent', () => {
  let component: ReporteDeServicioComponent;
  let fixture: ComponentFixture<ReporteDeServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDeServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDeServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
