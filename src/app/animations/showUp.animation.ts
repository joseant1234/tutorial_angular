import { trigger, style, transition, animate, state } from '@angular/animations';

// se exporta el resultado de la funcion trigger
export const showUp = trigger('showUp',[
  state('0', style({
    backgroundColor: 'blue',
    maxHeight: '40px'
  })),
  state('1', style({
    backgroundColor: 'red',
    maxHeight: '500px'
  })),
  transition('0 => 1', animate('0.4s ease-out', style({
    transform: 'scale(1.3)',
    border: 'solid 1px'
  }))),
  transition('1 => 0', animate('0.4s ease-in'))
]);
