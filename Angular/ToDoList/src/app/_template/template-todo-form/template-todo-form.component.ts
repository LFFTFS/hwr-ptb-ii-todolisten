import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus as faPlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent implements OnInit {

  faPlus = faPlus;
  public toDo$: Todo;
  @Output() ping: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  constructor() { 
    this.toDo$ = {
      id: 0,
      status: false,
      label: ""
    }
  }

  ngOnInit(): void {
  }

  public createToDo(event?: any): void {
    this.ping.emit(this.toDo$);
    // Objekt leeren
    this.toDo$.label = '';
  }

}
