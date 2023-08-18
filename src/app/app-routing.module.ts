import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
