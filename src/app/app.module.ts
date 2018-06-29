import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// modulo para peticiones a servidores via HTTP
import { HttpClientModule } from '@angular/common/http';

// modulo para especificar animacion
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { UserCardComponent } from './user-card/user-card.component';

import { SecondsToTimeFormat } from './pipes/SecondsToTimeFormat.pipe';
import { RedBorder } from './directives/RedBorder.directive';

import { ArticlesService } from './services/articles.service';
import { ArticlesComponent } from './articles/articles.component';

import { FullScreenComponent } from './full-screen/full-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UserCardComponent,
    SecondsToTimeFormat,
    RedBorder,
    ArticlesComponent,
    FullScreenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
