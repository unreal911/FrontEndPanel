import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatenimientoComponent } from './pages/matenimiento/matenimiento.component';
import { ControlComponent } from './pages/usuario/control/control.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'mantenimiento', component: MatenimientoComponent },
      { path:'usuario/control',component:ControlComponent},
      { path: '**', redirectTo: 'mantenimiento' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
