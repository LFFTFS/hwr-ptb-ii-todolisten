import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TodoForm = ({ onAddTodo }) => {
    const [label, setLabel] = React.useState('')

    function createToDo(){
        if(!label){
            alert("Benennen Sie den neuen Todo-Punkt");
        }else{
            onAddTodo({label});
            setLabel('');
        }
    }

    return (
        <div className="todoform-template">
            <div className="container-md">
                <div className="row todo-form">
                    <div className="todo-content col-11">
                        <input type="text" value={label} placeholder="Neuen Todo-Punkt hinzufügen" onKeyDown={(e) => e.key === 'Enter' && createToDo()} onChange={(e) => setLabel(e.target.value)} />
                    </div>
                    <div className="create col-1" onClick={createToDo}>
                        <span>
                            <FontAwesomeIcon icon={ faPlus } />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodoForm
