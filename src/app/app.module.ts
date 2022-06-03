import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GenreComponent} from "./components/genre/genre.component";
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {AppInterceptor} from "./app.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import { MovieDetailsComponent } from './components/movie-details/movie-details/movie-details.component';
import { PaginationComponent } from './components/pagination/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    HeaderComponent,
    MovieListComponent,
    MovieCardComponent,
    MainLayoutComponent,
    MovieDetailsComponent,
    PaginationComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
