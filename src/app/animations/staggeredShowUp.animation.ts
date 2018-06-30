import { trigger, style, transition, animate, state, stagger, query, keyframes } from '@angular/animations';

// se exporta el resultado de la funcion trigger
// el trigger se debe definir sobre el elemento padre (ul) para q a partir de ahi se pueda seleccionar los elementos q se estan construyendo en base a la lista e ir aplicando un pequeño restraso entre cada uno de ellos
// ese efecto se le conoce como stagger (escalonado) animation
// de esa manera si se viera la linea de tiempo o fotogramas de la animacion parecería una escalera
// angular da la posibilidad de definir como estado un wildcard (comodin *) en lugar del nombre del estado
// * => *, desde el estado q sea hacia el estado q sea
// query es como el querySelectorAll sobre el elemento padre (ul) q se va aplicar el trigger; query permite seleccionar elementos q estan dentro de dicho elemento (ul), por ejemplo en este caso puede ser todos los elemetos li del ul
// query tiene selectores especiales q permite hacer referencia caracteristicas especiales o particulares de un elemento q tienen q ver con angular.
// por ejemplo se puede seleccionar todos los elementos li con query('li') o seleccionar todos los elementos q estan entrando query(':enter')
// query(':enter') elementos q estan entrando o insertando en el DOM (elemntos q estan cambiando su estado void a un estado distinto)
// en las animaciones de angular, cuando un elemento estan en estado void, este no es parte del DOM, q apenas se va insertar o fue removido del DOM.
// void => *, del estado no existente hacia el estado q sea, significa q el elemento esta entrando
// stagger ese la funcion q permite aplicar escalonado entre elementos con cierto retraso. stagger('80ms') se especifica el retraso entre elemento (la diferencia entre q se aplica la animacion entre cada elemento)
// en el animate de stagger se aplica la animacion, mientras se hace el escalonado
// los keyframes son similares a los de css
// offset es un valor q va desde 0 al 1, q indica en medida tiene q aplicar el estilo en la linea de tiempo o fotogramas
// si la animacion dura 0.4s, el offset 0 es el inicio de la duracio de la animacion y el 1 es 0.4s de la animacion. si especifica offset 0.8 seria 0.3s aprox en la animacion
// tambien se pueda usar query para asignar valores iniciales al elemento.
// optional: true es para q aunque el resultado del selector sea vacio no debe de enviar error
// query(:leve) es para aplicar animaciones de salida
export const staggeredShowUp = trigger('staggeredShowUp',[
  transition('* => *',[
    query(':enter',style({transform: 'translateX(-100px)',opacity: '0'}),{ optional: true }),
    query(':enter', stagger(50,[
      animate(200, keyframes([
        style({transform: 'translateX(-100px)',opacity: '0', offset: 0}),
        style({transform: 'translateX(50px)',opacity: '1', offset: 0.5}),
        style({transform: 'translateX(0px)',opacity: '1', offset: 1})
      ]))
    ]),{ optional: true })
  ])
]);
