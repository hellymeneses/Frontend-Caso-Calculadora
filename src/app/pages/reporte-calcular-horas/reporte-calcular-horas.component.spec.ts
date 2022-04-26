import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCalcularHorasComponent } from './reporte-calcular-horas.component';

describe('ReporteCalcularHorasComponent', () => {
  let component: ReporteCalcularHorasComponent;
  let fixture: ComponentFixture<ReporteCalcularHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCalcularHorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCalcularHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
