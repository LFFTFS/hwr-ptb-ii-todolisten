import { Injectable } from '@angular/core';
import { Todo } from '../_interface/todo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private nextId: number;

  constructor() { 
    let todos = this.getTodos();
    if(todos.length == 0){
      this.nextId = 1;
    } else {
      let maxId = todos[todos.length-1].id;
      if(maxId === undefined) {
        this.nextId = 1;
      }else{
        this.nextId = maxId+1;
      }
    }
  }
  
  public getTodos(status?:boolean): Todo[]{
    let items = localStorage.getItem('todos');
    let todoItem = [];
    if (items != null){
      todoItem = JSON.parse(items).todos;
      if(status != undefined){
        let new_todos = [];
        let el: Todo;

        for (let i = 0; i < todoItem.length; i++) {
          el = todoItem[i];
          if(el.status == status){
            new_todos.push(el);
          }
        }
        todoItem = new_todos;
      }
    }
    return todoItem;
  }

  public addTodo(labelInput: string, statusInput: boolean): void{
    let todo = {
      id: this.nextId,
      label: labelInput,
      status: statusInput
    }
    let todos = this.getTodos();
    todos.push(todo);

    this.setLocalStorageTodos(todos);
    this.nextId++;
  }

  public removeTodo(id:number):void{
    let todos = this.getTodos();
    todos = todos.filter((todo)=> todo.id != id);
    this.setLocalStorageTodos(todos);
  }

  public editTodo(id: number, labelInput: string, statusInput: boolean): void{
    let todos = this.getTodos();
    let newObj = {
      id: id,
      label: labelInput,
      status: statusInput
    }
    for (let i = 0; i < todos.length; i++) {
      const el = todos[i];
      if(el.id == id){
        todos = todos.filter((todo) => todo.id != id);
        todos.push(newObj);
      }
    }

    // Sortiert todos nach id
    todos = todos.slice(0);
    todos.sort((left, right) => {
      if (left.id < right.id) return -1;
      if (left.id > right.id) return 1;
      return 0;
    });
    this.setLocalStorageTodos(todos);
  }

  private setLocalStorageTodos(todos: Todo[]): void{
    localStorage.setItem('todos', JSON.stringify({todos: todos}));
  }

}
