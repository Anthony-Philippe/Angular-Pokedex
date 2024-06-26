import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { DetailComponent } from './detail/detail.component';

// Création des routes de l'application 

const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'details/:name', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
