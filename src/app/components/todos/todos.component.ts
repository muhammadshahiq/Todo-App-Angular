import { Component, isSignal } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Todo 1',
        description: 'This is Todo 1',
        active: true,
      },
      {
        id: 2,
        title: 'Todo 2',
        description: 'This is Todo 2',
        active: false,
      },
      {
        id: 3,
        title: 'Todo 3',
        description: 'This is Todo 3',
        active: true,
      },
      {
        id: 4,
        title: 'Todo 4',
        description: 'This is Todo 4',
        active: true,
      },
      {
        id: 5,
        title: 'Todo 5',
        description: 'This is Todo 5',
        active: false,
      },
      {
        id: 6,
        title: 'Todo 6',
        description: 'This is Todo 6',
        active: true,
      },
    ];
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
