import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from 'primeng/panel';
import { PrevisaoSemanaComponent } from './previsao-semana/previsao-semana.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevisaoSemanaComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
