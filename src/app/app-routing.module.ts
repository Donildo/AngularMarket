import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListFilmesComponent } from './views/list-filmes/list-filmes.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"list-films",
  component: ListFilmesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
