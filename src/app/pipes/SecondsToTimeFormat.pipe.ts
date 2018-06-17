import { Pipe, PipeTransform } from '@angular/core';

// al implementar la interfaz PipeTransform se debe implementar al `;menos el metodo transform
// se debe registrar en el app.module
@Pipe({
  name: 'secondsToTimeFormat'
})
export class SecondsToTimeFormat implements PipeTransform{
  // recibe al menos un argumento q va transformar o modificar
  // despues del primer argumento, se enlista los argumentos q se van a pasar al pipe
  transform(seconds : number, showMinutes : boolean) : string{
    // 3600 => 1 hr
    // 3880 => 1 hr 4 min

    // rendondea hacia abajo : 1.1 => 1, 1.7 => 1
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);

    // para la interpolacion en ts se debe usar operador backtick ``
    if(!showMinutes) return `${hours}`;
    return `${hours} hrs ${minutes}min`;
  }
}
