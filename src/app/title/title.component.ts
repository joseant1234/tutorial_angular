import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit{

  public name : string;
  public moreInformation : boolean = true;
  public isAvailable : boolean = false;
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
