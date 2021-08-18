import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';


function controlHoras(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^([1-9]|1[0-4])$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {controlDeHoras: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

 @Directive({
  selector: '[control-horas]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:controlHoras}
    ]
})
export class ControlHoras {

  constructor() { }

}




