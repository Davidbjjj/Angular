import { Component } from '@angular/core';

@Component({
  selector: 'carrosel',
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.css'
})
export class CarroselComponent {
   categoria="Categoria";
   OBJ={
    itemsobj:{
      item1:1,
      item2:"Item3",
    },
   };
   /**Quando der o erro de Property 'tepy' does not exist on type 'never', é por conta que o não consegue indentificar qual o tipo/tipagem do objeto.plano:any{info:sss,ui:""} */
   /**ou seja 
    * 
    * OBJ:any ={
    itemsobj:{
      item1:1,
      item2:"Item3",
    },
   };
    * 
    * 
    * 
    */

  }
