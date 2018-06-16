// importar el decorador de directiva para convertir una clase en una directiva
// ElementRef es un servicio q se va inyectar para acceder al elemento html nativo de aquel q se esta modificando, para acceder a su estilo, id, ...
// registrar la directiva en el app.module
// se usa Input para recibir parametros en la directiva
import { Directive, ElementRef, Input} from '@angular/core';

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
      this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`
      this.el.nativeElement.classList.add(this.redClass);
    }
}
