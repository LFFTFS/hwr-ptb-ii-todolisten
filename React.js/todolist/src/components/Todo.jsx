import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import checkboxEmpty from "../assets/svg/checkbox-empty.svg";
import checkboxDone from "../assets/svg/checkbox-done.svg";
import { PropTypes } from 'prop-types';

const Todo = ({todo, onDeleteToDo, onEditTodo}) => {
    const [status, setStatus] = React.useState(todo.status)
    const [label, setLabel] = React.useState(todo.label)
    const todoId = todo.id

    function editLabel (label){
        const newTodo = {
            id: todoId,
            label: label,
            status: status
        }
        setLabel(label)
        onEditTodo(newTodo)
    }

    function flipStatus () {
        const newTodo = {
            id: todoId,
            label: label,
            status: !status
        }
        setStatus(!status)
        onEditTodo(newTodo)
    }

    function deleteToDo () {
        onDeleteToDo(todoId)
    }

    return (
        <div className="todo-template">
            <div className={!status ? "todo" : "todo done"}>
               <div className="todo-content">
                   <div className="handle leftside-buttons">
                       <FontAwesomeIcon icon={ faGripVertical } />
                   </div>
                   <div className="todo-content-check">
                       {status ? <img src={ checkboxDone } alt="checkbox-done" onClick={flipStatus} /> : <img src={ checkboxEmpty } alt="checkbox-empty" onClick={flipStatus} />}
                   </div>
                   <div className="todo-content-title">
                       <input type="text" placeholder="Name des ToDo-Punkes" defaultValue={label} disabled={status} onBlur={(e) => editLabel(e.target.value)}/>
                   </div>
               </div>
               <div className="delete" onClick={deleteToDo}>
                   <span>
                       <FontAwesomeIcon icon={faTrash} />
                   </span>
               </div>
            </div>
        </div>
    )
}
export default Todo

Todo.propTypes = {
    prop_todo: PropTypes.object
}

