import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddTodoItemsComponent } from './components/add-todo-items/add-todo-items.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieShareAlertComponent } from './components/movie-share-alert/movie-share-alert.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoItemsComponent,
    MovieListComponent,
    MovieShareAlertComponent,
    MovieDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
