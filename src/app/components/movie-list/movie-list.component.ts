import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  search!: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      search: this.search,
      active: true,
    };
  }
}
