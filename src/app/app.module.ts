import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReporteDeServicioComponent } from './pages/reporte-de-servicio/reporte-de-servicio.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http/';


import { ReactiveFormsModule } from '@angular/forms';


//ANGULAR MATERIAL
import {MatCardModule} from '@angular/material/card';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material/input';
import { ReporteCalcularHorasComponent } from './pages/reporte-calcular-horas/reporte-calcular-horas.component';


@NgModule({
  declarations: [
    AppComponent,
    ReporteDeServicioComponent,
    ReporteCalcularHorasComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
