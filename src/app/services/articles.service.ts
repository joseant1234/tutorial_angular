// un servicio de angular es una clase, q solo se instancia 1 objeto de la misma clase (patron singleton) y este objeto esta diponible para todos los componentes

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// angular 5
// import 'rxjs/add/operator/map';
// angular 6
import { map } from 'rxjs/operators';

// convertir todos los datos q viene del servicio a solo el id y el nombre
interface Repo{
  id: string,
  name: string
}

class Repo{
  constructor(public id : string, public name :string){

  }
}

// agrega metadata
@Injectable()
export class ArticlesService{
  // por ejemplo si se tiene un array de articles, y se agrega un elemento a este, el estado de array va estar disponible y reflejados para todos los componentes
  // public articles : any;
  // para enviar los datos del servicio al componente se tiene las propiedades del servicio
  // solo las propiedades publicas pueden ser accedidas desde el componente

  public articlesCount : number = 0 ;

  // se va tener un observable q va a estar enviando arreglos de objetos q le pertenecen a la clase REPO
  public reposObserver : Observable<Repo[]>;

  public mainRepo : Repo;

  // en el constructor se inyecta la dependencia de HTTP
  // con esta clase se debe instanciar un objeto para q el inyector de dependencias deliver una instancia de ese servicio q es de angular para hacer consultas
  constructor(private http: HttpClient){
    this.getMainRepo();
  }

  // el trabajo del servicio es manejar los datos
  // el trabajo del componente es mostrar los datos y permitir q el usuario interactue con ellos
  getAll(){
    // lo q hace el metodo get es return un observador
    // para obtener los datos se debe suscribir. Para este caso solo se recibe una vez la informacion cuando la peticion se realiza
    // el operador map trae los mismos datos q se le enviaron al inicio al subscribe
    this.reposObserver = this.http.get('https://api.github.com/users/joseant1234/repos')
    .pipe(map((data : Object[]) => {
      // return la primer objecto del array
      // return data[0]
      // return el primero objecto del array de la clase repo
      // return new Repo(data[0].id,data[0].name)
      // return todo el array, cada elemento es de la clase repo
      // el map de data.map no es el mismo del operador map del observable
      return data.map((r : any) => new Repo(r.id,r.name))
    }));
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

  // Observable es de tipo generico, se debe especificar el tipo <> de los datos q debe enviar el observable hacia los observadores
  buildObservable() : Observable<any>{
    let number = 0;
    return Observable.create(function(observer){
      setInterval(()=> observer.next(number++),1000)
    })
  }

  getMainRepo(){
    // fetch return un objecto de la clase Response
    // del objecto q vino se ejecuta el metodo json, y este return otra promesa
    fetch('https://api.github.com/users/joseant1234/repos')
    .then(response => response.json())
    .then(repos =>{
      const JSONRepo = repos[repos.length - 1 ];
      this.mainRepo = new Repo(JSONRepo.id,JSONRepo.name);
    })
  }
}
