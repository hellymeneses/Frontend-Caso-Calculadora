import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ReporteDeServicioService } from 'src/app/services/reporte-de-servicio.service';
import swal from 'sweetalert2'
import { RespuestaReporte } from '../models/respuestaReporte';
@Component({
  selector: 'app-reporte-de-servicio',
  templateUrl: './reporte-de-servicio.component.html',
  styleUrls: ['./reporte-de-servicio.component.css']
})
export class ReporteDeServicioComponent implements OnInit {


  reporteDeServicioFormulario!: FormGroup;
  reporteDeServicioHora!: FormGroup;
  public horasTotales!: number;
  public minutosTotales?:number;
  public fechaInvalida: boolean = false;
  hoursInicioToBackend?: number;
  hoursFinalToBackend?: number;

  get identificacionDeTecnico() { return this.reporteDeServicioFormulario.get('identificacionDeTecnico'); }
  get identificacionDeServicio() { return this.reporteDeServicioFormulario.get('identificacionDeServicio'); }
  get fechaInicio() { return this.reporteDeServicioHora.get('fechaInicio'); }
  get fechaFin() { return this.reporteDeServicioHora.get('fechaFin'); }
  get horaInicio() { return this.reporteDeServicioHora.get('horaInicio'); }
  get horaFin() { return this.reporteDeServicioHora.get('horaFin'); }
 



  constructor(private reporteService: ReporteDeServicioService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.reporteDeServicioFormulario = this.fb.group({
      identificacionDeTecnico: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      identificacionDeServicio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    });

    this.reporteDeServicioHora = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required]
    });
  }


  enviarReporteDeServicio() {
    this.calcularHorasTotales();
    let reporteDeServicio :RespuestaReporte = {
      'idTecnico': this.reporteDeServicioFormulario?.value.identificacionDeTecnico,
      'idServicio': this.reporteDeServicioFormulario?.value.identificacionDeServicio,
      'fechaInicio': this.reporteDeServicioHora?.value.fechaInicio,
      'fechaFin': this.reporteDeServicioHora?.value.fechaFin,
      'horaInicio': this.hoursInicioToBackend,
      'horaFin': this.hoursFinalToBackend,
      'horasTotales': this.horasTotales,
      'minutosTotales': this.minutosTotales,
    }

    

    this.reporteService.postGuardarReporte(reporteDeServicio).subscribe(resp => {
         resp;
      swal.fire('Nuevo reporte ingresado', `Reporte Id-Tecnico ${this.reporteDeServicioFormulario.value.identificacionDeTecnico}  creado con exito `, 'success')
    }

    )
  }

  encontrarTodosLosReportes() {
    this.reporteService.getAllReportes().subscribe(resp => {
    })
  }


  calcularHorasTotales() {
    let minutosTotalesInternos;
    let minutesInicioInternos;
    let minutesFinInternos;

    let hoursInicio = Number(this.reporteDeServicioHora.value.horaInicio.match(/^(\d+)/)[1]);
    let minutesInicio = Number(this.reporteDeServicioHora.value.horaInicio.match(/:(\d+)/)[1]);
    let hoursFin = Number(this.reporteDeServicioHora.value.horaFin.match(/^(\d+)/)[1]);
    let minutesFin = Number(this.reporteDeServicioHora.value.horaFin.match(/:(\d+)/)[1]);
    this.hoursInicioToBackend = hoursInicio;
    this.hoursFinalToBackend = hoursFin;
    let horasTotales = Math.abs(hoursInicio - hoursFin) * 60;
    let minutosTotales = Math.abs(minutesInicio - minutesFin);
    let horaCompuesta = horasTotales + minutosTotales;
    this.horasTotales = horaCompuesta;
   

    if(minutesFin==0 && minutesInicio > 0){
      minutesFin=60;
    }
    if(minutesInicio>minutesFin){
      minutosTotalesInternos = (60-minutesInicio) + minutesFin;
        }  else {
      minutosTotalesInternos = Math.abs(minutesInicio-minutesFin);
    }
    this.minutosTotales = minutosTotalesInternos;
  }


  validarFechaDeInicioVsFinal() {
    let fechaInicio: Date = new Date(this.reporteDeServicioHora?.value.fechaInicio);
    let fechaFinal: Date = new Date(this.reporteDeServicioHora?.value.fechaFin);
    if (fechaInicio > fechaFinal) {
      this.fechaInvalida = true;
    } else {
      this.fechaInvalida = false;
    }
  }
}


