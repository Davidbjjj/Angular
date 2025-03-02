import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroselComponent } from './carrosel.component';
import { ElementocarroselComponent } from '../elementocarrosel/elementocarrosel.component';



@NgModule({
  declarations: [
    CarroselComponent,
    ElementocarroselComponent
  ],
  
  imports: [
    CommonModule,
  ],
  exports:[
    CarroselComponent,
    ElementocarroselComponent
  ]
 
})
export class CarroselModule { }
