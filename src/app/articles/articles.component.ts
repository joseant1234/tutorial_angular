import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.service';

import { staggeredShowUp } from '../animations/staggeredShowUp.animation';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: [ staggeredShowUp ]
})
export class ArticlesComponent implements OnInit {

  // el articleComponent esta inyectando el servicio q tiene el metodo para hacer la consulta via HTTP
  constructor(private articleS : ArticlesService) { }

  ngOnInit() {
    this.articleS.getAll();

    // se guarda el observable
    // const observable = this.articleS.buildObservable();
    // para obtener informacion del observable se debe suscribirse a el
    // la funcion dentro de subscribe se ejecuta cada vez q el observable envie nuevos datos, en este caso cada vez q dentro del Obervable se llame al metodo next
    // observable.subscribe((data)=>{
    //   console.log(data)
    // });
  }

}
