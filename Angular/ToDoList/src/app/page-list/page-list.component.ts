import { Component, OnInit } from '@angular/core';
import { Todo } from '../_interface/todo';
import { Eventping } from '../_interface/eventping';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../_service/localstorage.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  faUp = faChevronUp;
  faDown = faChevronDown;
  public toDoShow: boolean;
  public toDoDoneShow: boolean;
  public $todos: Todo[];
  public $todosdone: Todo[];

  constructor(private lss: LocalStorageService) {
    this.toDoShow = true;
    this.toDoDoneShow = false;
    this.$todos = lss.getTodos(false);
    this.$todosdone = lss.getTodos(true);
  }

  ngOnInit(): void {
  }

  public createToDo(event: Todo): void {
    this.lss.addTodo(event.label, event.status);
    const allTodos:Todo[] = this.lss.getTodos(event.status);
    this.$todos.push(allTodos[allTodos.length-1]);
  }

  public update(event: Eventping): void {
    if( 'check' === event.label){
      if(!event.object.status){
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      }else{
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosdone.push(event.object);
      }
      this.lss.editTodo(event.object.id, event.object.label, event.object.status);
    }
    if( 'delete' === event.label) {
      if(event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
      }else{
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
      this.lss.removeTodo(event.object.id);
    }
    if ('label' === event.label) {
      if (event.object.status) {
        this.$todosdone.forEach((toDo: Todo) => {
          if(toDo.id === event.object.id){
            toDo.label = event.object.label;
            console.log(event.object.label);
            this.lss.editTodo(event.object.id, event.object.label, event.object.status);
          }
        });
      } else {
        this.$todos.forEach((toDo: Todo) => {
        if (toDo.id === event.object.id) {
          toDo.label = event.object.label;
          console.log(event.object.label);
          this.lss.editTodo(event.object.id, event.object.label, event.object.status);
        }
      });
      }
    }
  }

}
