import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './components/list/list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    AboutUsComponent,
    SearchPageComponent,
    CategoryPageComponent,
    PokedexComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
