import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public name : string;
  public username : string;
  public avatar : string

  // subscribed es una instancia de eventEmitter
  @Output() subscribed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.username = "jaja";
    this.name = "Hola";
    this.avatar = "https://cdn-images-1.medium.com/max/705/1*7GZIq-Pg4VsrgWObJVi0SQ.png";

    // emit dispara el evento personalizado, lo q se pasa como argumento es un valor q corresponda al tipo decladoro , este caso boolean
    setTimeout(()=> this.subscribed.emit(true),300)
  }

  changing(event: any){
    // con event se obtiene toda la informacion q viene con el evento
    this.username = event.target.value;

  }

}
