import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// modulo para peticiones a servidores via HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { UserCardComponent } from './user-card/user-card.component';

import { SecondsToTimeFormat } from './pipes/SecondsToTimeFormat.pipe';
import { RedBorder } from './directives/RedBorder.directive';

import { ArticlesService } from './services/articles.service';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UserCardComponent,
    SecondsToTimeFormat,
    RedBorder,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
