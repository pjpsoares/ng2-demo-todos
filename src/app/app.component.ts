import { Component, OnInit } from '@angular/core';

import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  todos = [];

  constructor( private todosService: TodosService) {}

  ngOnInit() {
    this.todos = this.todosService.get();
  }

  addNew(todo) {
    this.todos.push(todo);
  }
}
