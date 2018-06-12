import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public name : string;
  public username : string;
  public avatar : string

  constructor() { }

  ngOnInit() {
    this.name = "Hola";
    this.username = "jaja";
    this.avatar = "https://cdn-images-1.medium.com/max/705/1*7GZIq-Pg4VsrgWObJVi0SQ.png"
  }

}
