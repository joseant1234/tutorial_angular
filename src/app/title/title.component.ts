import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';


// trigger se encarga de crear un disparador de una animacion en el cual se enlistaran los estados y transiciones q van a definir o especifcar la animacion
// en trigger argumentos (nombreDisparador,[enlistar transiciones y estados en el q se encuentra componente])
// lo q esta en state son los valores q va adoptar la variable boolean cuando sea transformado en un string
// en el dsl de angular los estados son cadena, y como la prop es boolean se especifica "0" como falso y "1" como verdadero
// en el segundo argumento de state se especifica los estilos q son del estado, las prop css q se van asignar al componente cuando este en ese estado
// ademas de los estados en el arreglo de configuracion q se envia a trigger, se debe especificar las transiciones q requiren una animacion y la manera en la q se van a ejecutar dichas animaciones
// para pasar del estado '0' al estado '1', se decide q la animacion dure 0.4s con una funcion de ease-out
// los valores especificados en style son los valores finales q se le asignaran al elemento al cual se halla especificado el trigger de la animacion, lueego q halla sucedido el cambio a dicho estado
// se pueden definir estilos mientras la animacion sucede, pero no estaran en el elemento al final de la transicion
// los estilos en animacion se colocan animate

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations: [
    trigger('showUp',[
      state('0', style({
        backgroundColor: 'blue'
      })),
      state('1', style({
        backgroundColor: 'red'
      })),
      transition('0 => 1', animate('0.4s ease-out', style({
        transform: 'scale(1.3)',
        border: 'solid 1px'
      })),
      transition('1 => 0', animate('5s ease-out')),
    ])
  ]
})

export class TitleComponent implements OnInit{

  public name : string;
  public moreInformation : boolean = true;
  public isAvailable : boolean = true;
  public category : string;
  public topics : string[];
  public launchDate : Date;
  public price : number = 25;
  public seconds : number = 11640;

  @Input() subscribed : boolean;

  constructor(){}

  ngOnInit(){
    this.category = 'web';
    this.name = 'Jose';
    this.topics = [
      'Ruby on Rails',
      'Componentes',
      'Directivas',
      'Animaciones',
      'Servicios',
      'RxJS',
      'Binding'
    ];
    this.launchDate = new Date(2018,11,27);
  }

  toggleMoreInformation(){
    this.moreInformation = !this.moreInformation;
  }
}
