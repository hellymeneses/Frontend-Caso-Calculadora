import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReporteDeServicioService } from 'src/app/services/reporte-de-servicio.service';
import { CalculoDeHoras } from '../models/calculoDeHoras';
import { RespuestaReporte } from '../models/respuestaReporte';

@Component({
  selector: 'app-reporte-calcular-horas',
  templateUrl: './reporte-calcular-horas.component.html',
  styleUrls: ['./reporte-calcular-horas.component.css']
})
export class ReporteCalcularHorasComponent implements OnInit {
  public id_tecnico!: string;
  public semana!: number;
  public HorasDineroDto?: CalculoDeHoras;
  public reportes?: RespuestaReporte[];

  reporteDeServicioFormulario!: FormGroup;

  constructor(private readonly reporteServices: ReporteDeServicioService,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.reporteDeServicioFormulario = this.fb.group({
      idTecnico: ['',  [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      semana: ['', Validators.required],

    });
  }

  traerReportes() {
    this.id_tecnico = this.reporteDeServicioFormulario?.value.idTecnico;
    this.semana = this.reporteDeServicioFormulario?.value.semana;
    this.reporteServices.getTraerReportes(this.id_tecnico, this.semana).subscribe(resp => {
      this.reportes = resp;

      console.log("respuesta modulo dos: " ,resp);
     
    })
  }

  traerValorAPagar() {
    this.reporteServices.getTraerValorAPagar(this.id_tecnico, this.semana).subscribe(resp => {
      this.HorasDineroDto = resp;
      
      console.log("respuesta modulo tre: " ,resp);

    
    })
  }
  get identificacionDeTecnico() { return this.reporteDeServicioFormulario.get('idTecnico'); }
  get semanas() { return this.reporteDeServicioFormulario.get('semana'); }
}
