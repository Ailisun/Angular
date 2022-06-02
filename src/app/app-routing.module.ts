import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";

const routes:Routes = [{
  path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo: 'movie', pathMatch:'full'},
    {path:'movie',component:MovieListComponent}
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
