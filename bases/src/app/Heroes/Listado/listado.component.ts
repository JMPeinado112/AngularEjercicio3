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
  muerto='';
  posicion = '';
  borrado2=0;
  borrar(numero:number){
    if(numero >= this.heroes.length ){
    this.posicion = 'No hay ningun heroe en esa posicion';
    this.error(this.posicion);
    }else{
    this.borrados.push(this.heroes[numero]);
    this.muerto ='Se acaba de borrar ' + this.heroes[numero];
    this.heroes.splice(numero, 1);
    this.borrado = true;
    this.posicion = '';
    }
  }
  hola():string{
    if(this.borrado){
    return 'Se han borrado ' + this.borrados;
    }else{
      return 'No se ha borrado ningun heroe';
    }
  }

  error(posicion:string):string{
  return posicion;
  }
  muertoahora(muerto:string):string{
  return muerto;
  }
}
