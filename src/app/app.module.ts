import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';
import { AddTodoItemsComponent } from './components/add-todo-items/add-todo-items.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { LoadingInterceptor } from './loading.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';

// Available options
interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoItemsComponent,
    UpdateItemComponent,
    MoviesComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent,
    // SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
