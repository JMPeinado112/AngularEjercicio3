import { stringify } from "@angular/compiler/src/util";
import { Component } from "@angular/core";
import { ɵHAMMER_PROVIDERS__POST_R3__ } from "@angular/platform-browser";

@Component({
    selector: 'listado-component',
    templateUrl: './listado.component.html'
})

export class ListadoComponent{
  title = 'Listado';
  heroes:string[] = ['IronMan-', 'CAmerica-', 'Hulk-', 'Thor'];
  borrados:string[] = [];
  borrado = false;
  num=0;
  borrar2=this.heroes.length;
  muerto='';
  borrar(numero:number){
    this.borrar2++;
    this.borrados.push(this.heroes[this.num]);
    this.muerto ='Se acaba de borrar ' + this.heroes[this.num];
    this.heroes.splice(numero, 1);
    this.borrado = true;
    
  }
  hola():string{
    if(this.borrado){
    return 'Se han borrado ' + this.borrados;
    }else{
      return 'No se ha borrado ningun heroe';
    }
  }

  muertoahora(muerto:string):string{
  return muerto;
  }
}