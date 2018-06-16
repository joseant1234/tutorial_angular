import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit{

  public name : string;
  public moreInformation : boolean = false;
  public isAvailable : boolean = true;
  public category : string;
  public topics : string[];

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
  }
}
