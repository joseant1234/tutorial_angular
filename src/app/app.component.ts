import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public userSubscribed : boolean = false;

  subscriptionChanged(event){
    console.log('El usuario se suscribió');
    console.log(event)
    this.userSubscribed = event;
  }
}
