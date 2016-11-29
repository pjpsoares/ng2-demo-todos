import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css']
})
export class TodosInputComponent {
  @Output() onNew = new EventEmitter();

  todo = {
    description: '',
    date: undefined
  };

  constructor() { }

  submit() {
    this.onNew.emit(this.todo);
    this.todo = {
      description: '',
      date: undefined
    };
  }
}
