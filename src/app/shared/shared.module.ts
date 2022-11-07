import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
