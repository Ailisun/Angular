import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details/movie-details.component";

const routes:Routes = [{
  path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo: 'movie', pathMatch:'full'},
    {path:'movie',component:MovieListComponent},
    {path: 'movie/:id', component: MovieDetailsComponent},
  ]
}]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
