import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../_interface/todo';
import { Eventping } from '../../_interface/eventping';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

  faTrash = faTrash;
  faGrip = faGripVertical;
  @Input() toDo$: Todo;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.toDo$ = {
      id: 0,
      label: "Leer",
      status: false
    }
  }

  ngOnInit(): void {
  }

  public changeCheck(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
    const eventObject: Eventping = {
      label: 'check',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }

  public changeLabel(event?: any): void {
    const eventObject: Eventping = {
      label: 'label',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }

  public deleteToDo(event?: any): void {
    const eventObject: Eventping = {
      label: 'delete',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }

}
