import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatenimientoComponent } from './pages/matenimiento/matenimiento.component';
import { SharedModule } from '../shared/shared.module';
import { ControlComponent } from './pages/usuario/control/control.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    DashboardComponent,
    MatenimientoComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedModule,
    HttpClientModule

  ]
})
export class PanelModule { }
