import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { UserCardComponent } from './user-card/user-card.component';

import { SecondsToTimeFormat } from './pipes/SecondsToTimeFormat.pipe';
import { RedBorder } from './directives/RedBorder.directive';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UserCardComponent,
    SecondsToTimeFormat,
    RedBorder,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
