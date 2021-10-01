
export default class LocalStorageService {

  // Singelton
  static myInstance = null;
  static getInstance(){
    if(LocalStorageService.myInstance == null){
      LocalStorageService.myInstance = new LocalStorageService();
    }
    return this.myInstance;
  }

  constructor() { 
    const todos = this.getAllTodos();
    if(todos.length === 0){
      this.nextId = 1;
    } else {
      const maxId = todos[todos.length-1].id;
      if(maxId === undefined) {
        this.nextId = 1;
      }else{
        this.nextId = maxId+1;
      }
    }
  }

  getNextId(){
    return this.nextId;
  }

  getAllTodos(){
    return JSON.parse(localStorage.getItem('todos')).todos;
  }

  getTodo(id){
    return this.getAllTodos().filter((todo) => todo.id !== id)
  }
  
  // get Pagelist || todos and todosdone
  getTodos(status = undefined){
    const items = localStorage.getItem('todos');
    let todoItem = [];
    if (items != null){
      todoItem = JSON.parse(items).todos;
      const new_todos = [];
      let el;

      for (let i = 0; i < todoItem.length; i++) {
        el = todoItem[i];
        if(status !== undefined || status !== null){
          if(el.status === status){
            new_todos.push(el);
          }
        }else{
          new_todos.push(el);
        }
      }
      todoItem = new_todos;
    }
    return todoItem;
  }

  addTodo(todo){
    const todos = this.getAllTodos();
    todos.push(todo);
    this.setLocalStorageTodos(todos);
    this.nextId++;
  }

  removeTodo(id){
    let todos = this.getAllTodos();
    todos = todos.filter((todo) => todo.id !== id);
    this.setLocalStorageTodos(todos);
  }

  editTodo(newTodo){
    let todos = this.getAllTodos();
    todos.forEach(el => {
      if(el.id === newTodo.id){
        todos = todos.filter((todo) => todo.id !== newTodo.id);
        todos.push(newTodo);
      }
    })

    // Sortiert todos nach id
    todos = todos.slice(0);
    todos.sort((left, right) => {
      if (left.id < right.id) return -1;
      if (left.id > right.id) return 1;
      return 0;
    });
    this.setLocalStorageTodos(todos);
  }

  setLocalStorageTodos(todos){
    localStorage.setItem('todos', JSON.stringify({todos: todos}));
  }

}
