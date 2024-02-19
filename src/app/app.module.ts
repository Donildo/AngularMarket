import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatButtonToggleModule } from "@angular/material/button-toggle"


import { HeaderComponent } from './componets/template/header/header.component';
import { FooterComponent } from './componets/template/footer/footer.component';
import { NavComponent } from './componets/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component'
import {HttpClientModule} from "@angular/common/http";
import { CardFilmComponent } from './componets/template/card-film/card-film.component';
import { ListFilmesComponent } from './views/list-filmes/list-filmes.component';
import { SelectButtonComponent } from './componets/template/select-button/select-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardFilmComponent,
    ListFilmesComponent,
    SelectButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
