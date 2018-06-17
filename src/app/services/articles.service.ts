// un servicio de angular es una clase, q solo se instancia 1 objeto de la misma clase (patron singleton) y este objeto esta diponible para todos los componentes

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// agrega metadata
@Injectable()
export class ArticlesService{
  // por ejemplo si se tiene un array de articles, y se agrega un elemento a este, el estado de array va estar disponible y reflejados para todos los componentes
  // public articles : any;
  // para enviar los datos del servicio al componente se tiene las propiedades del servicio
  // solo las propiedades publicas pueden ser accedidas desde el componente

  public articlesCount : number = 0 ;


  // en el constructor se inyecta la dependencia de HTTP
  // con esta clase se debe instanciar un objeto para q el inyector de dependencias deliver una instancia de ese servicio q es de angular para hacer consultas
  constructor(private http: HttpClient){}

  // el trabajo del servicio es manejar los datos
  // el trabajo del componente es mostrar los datos y permitir q el usuario interactue con ellos
  getAll(){
    // lo q hace el metodo get es return un observador
    // para obtener los datos se debe suscribir. Para este caso solo se recibe una vez la informacion cuando la peticion se realiza
    this.http.get('https://api.github.com/users/joseant1234/repos').subscribe(data => {
      console.log(data);
    });
  }

  // Observable es de tipo generico, se debe especificar el tipo <> de los datos q debe enviar el observable hacia los observadores
  buildObservable() : Observable<any>{
    let number = 0;
    return Observable.create(function(observer){
      setInterval(()=> observer.next(number++),1000)
    })
  }
}
