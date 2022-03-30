import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaruselComponent } from './carusel.component';



@NgModule({
  declarations: [
    CaruselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CaruselComponent
  ]
})
export class CaruselModule { }
