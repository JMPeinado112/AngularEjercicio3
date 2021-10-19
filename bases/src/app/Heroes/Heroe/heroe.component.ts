import { stringify } from "@angular/compiler/src/util";
import { Component } from "@angular/core";

@Component({
    selector: 'heroe-component',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent{
  title = 'Heroe';
  
  
  nombrea:string = '';
  heroes:string[] = [' IronMan', ' CAmerica', ' Hulk', ' Thor'];
  edades:number[] = [42, 102, 45,  1532];
  nombre:string = this.heroes[0];
  edad:number = this.edades[0];
  numero2:number=0;
  numero3:number=0;
  cambiarnombre(numero:number){
  
      this.numero2= this.numero2 + numero;    
    
    if(this.numero2 == this.heroes.length){
      this.numero2 =0;
      this.nombre = this.heroes[0]; 
    }else{
      this.nombre = this.heroes[this.numero2]; 
    }
               
  }
  getnombre():string{
    return this.nombre;                 
    }
  nombreconcat():String{
   return ' '+this.nombre + this.edad+' ';                 
   }
  nombreMayus():string{
    return ' '+ this.nombre.toUpperCase() + ' ';               
   }
  cambiaredad(numero:number){
    this.numero3= this.numero3 + numero;

    if(this.numero3 == this.edades.length){
      this.numero3=0;
      this.edad = this.edades[0];
    }else{
      this.edad = this.edades[this.numero3];
    }
  }
}