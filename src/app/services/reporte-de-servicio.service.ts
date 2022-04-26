import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculoDeHoras } from '../pages/models/calculoDeHoras';
import { RespuestaReporte } from '../pages/models/respuestaReporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteDeServicioService {

  private readonly uri = "http://localhost:8080/api/reportes-de-servicios"

  constructor(private readonly http: HttpClient) { }

  getAllReportes(): Observable<any> {
    return this.http.get<any>(this.uri);
  }

  postGuardarReporte(reporteDeServicio: RespuestaReporte): Observable<RespuestaReporte> {
    return this.http.post<RespuestaReporte>(this.uri, reporteDeServicio);
  }
  getTraerReportes(id_tecnico: string, semana: number): Observable<RespuestaReporte[]> {
    return this.http.get<RespuestaReporte[]>(`${this.uri}/idTecAndSemana/${id_tecnico}/${semana}`);

  }

  getTraerValorAPagar(id_tecnico: string, semana: number):Observable<CalculoDeHoras>{
    return this.http.get<CalculoDeHoras>(`${this.uri}/valorAPagar/${id_tecnico}/${semana}`);
  }

}
