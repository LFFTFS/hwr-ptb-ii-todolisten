import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LocalStorageService from '../services/localstorage.service';

let lss = LocalStorageService.getInstance();

const Pagelist = () => {
    const [toDoShow, setToDoShow] = React.useState(true)
    const [toDoDoneShow, setToDoDoneShow] = React.useState(false)
    const [todos, setTodos] = React.useState(lss.getTodos(false))
    const [todosdone, setTodosdone] = React.useState(lss.getTodos(true))
    const [todosLength, setTodosLength] = React.useState(0)
    const [todosdoneLength, setTodosDoneLength] = React.useState(0)
    
    React.useEffect(() => {
        setTodosLength(todos.length)
    }, [todos])
    React.useEffect(() => {
        setTodosDoneLength(todosdone.length)
    }, [todosdone])

    const addTodo = ({label}) => {
        const newTodo = {
            id: lss.getNextId(),
            label: label,
            status: false
        }
        lss.addTodo(newTodo)
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
        lss.removeTodo(id)
    }
    const deleteTododone = (id) => {
        setTodosdone(todosdone.filter((todo) => todo.id !== id))
        lss.removeTodo(id)
    }

    const editTodo = (newTodo) => {
        let allTodos = lss.getAllTodos()
        allTodos.forEach(el => {
            if(el.id === newTodo.id){
                allTodos = allTodos.filter((todo) => todo.id !== newTodo.id)
                allTodos.push(newTodo)
            }
        })
        setTodos(allTodos.filter((todo) => !todo.status))
        setTodosdone(allTodos.filter((todo) => todo.status))
        lss.editTodo(newTodo)
    }

    return (
        <div className="pagelist-template">
            <TodoForm onAddTodo={addTodo} />

            <div className="container-md">
                <div className="page-list">
                    <h3 className={!toDoShow ? 'pl-title justify-content-between' :'pl-title justify-content-between open'} onClick={() => {setToDoShow(!toDoShow)}}> 
                        <div className="left">
                            Offen
                            <span className="badge bg-secondary pl-num">{todosLength}</span>
                        </div>
                        <div className="right">
                            <span className="chevron-toggle">
                                {toDoShow ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                            </span>
                        </div>
                    </h3>
                    <div className="todo-elements" style={!toDoShow ? {display: 'none'} : {display: 'block'}}>
                        {todos.map((todo) => (
                            <Todo todo={todo} onDeleteToDo={deleteTodo} onEditTodo={editTodo} />
                        ))}
                    </div>
                </div>

                <hr />
                
                <div className="page-list">
                    <h3 className={!toDoDoneShow ? "pl-title justify-content-between" : "pl-title justify-content-between open"} onClick={() => {setToDoDoneShow(!toDoDoneShow)}}>
                        <div className="left">
                            Erledigt
                            <span className="badge bg-secondary pl-num">{todosdoneLength}</span>
                        </div>
                        <div className="right">
                            <span className="chevron-toggle">
                                {toDoDoneShow ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                            </span>
                        </div>
                    </h3>
                    <div className="todo-elements"  style={!toDoDoneShow ? {display: 'none'} : {display: 'block'}}>
                        {todosdone.map((todo) => (
                            <Todo todo={todo} onDeleteToDo={deleteTododone}  onEditTodo={editTodo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagelist
