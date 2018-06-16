// importar el decorador de directiva para convertir una clase en una directiva
// ElementRef es un servicio q se va inyectar para acceder al elemento html nativo de aquel q se esta modificando, para acceder a su estilo, id, ...
// registrar la directiva en el app.module
// se usa Input para recibir parametros en la directiva
// Agregar eventos al elemento en el q se esta aplicando la directiva de atributo, se puede  via un decorador llamado HostListener
// HostListener permite decorar funciones para q estas se ejecuten una vez q un evento sucede
import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[redBorder]'
})
export class RedBorder{

    @Input() redBorder : string;
    @Input() redClass : string;

    constructor(private el: ElementRef){}

    ngOnInit(){
      console.log('Usando directiva')
      // permite acceder al dom a traves de angular,
      // evitar interactuar de manera directa con el dom, usar las estraegias q angular expone para interactuar con el DOM, como el nativeElement
      // this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`;
      this.el.nativeElement.classList.add(this.redClass);
    }

    // recibe como argumento el evento q va estar escuchando (click,.. eventos del dom)
    // aplica listener o escucha de un evento al host o contenedor (es aquel q hace referencia a la directiva personalizada), por tanto se puede aplicar listener eventos al elemento al q se este aplicando la directiva de atributo
    @HostListener("mouseover") applyBorder(){
      this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`;
    }

    @HostListener("mouseout") removeBorder(){
      this.el.nativeElement.style.border = "none";
    }

}
