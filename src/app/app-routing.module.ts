import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteCalcularHorasComponent } from './pages/reporte-calcular-horas/reporte-calcular-horas.component';

import { ReporteDeServicioComponent } from './pages/reporte-de-servicio/reporte-de-servicio.component';

const routes: Routes = [
  {path: "reporte-de-servicio", component: ReporteDeServicioComponent},
  {path: "reporte-horas", component: ReporteCalcularHorasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
