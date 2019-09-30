import React from 'react';

const TodoList = (props) => (
	<div>
  	    {props.todoList.map(todo => 
          <TodoItem 
            key={todo.id} 
            {...todo}
            toggleTask={props.toggleTask}
            deleteTask={props.deleteTask}/>)}
	</div>
);

const TodoItem = (props) => {
    const toggleTask = () => {
        props.toggleTask(props.id);
    };

    const deleteTask = () => {
        props.deleteTask(props.id);
    };

    return (
        <div>
            <input type='checkbox' onClick={toggleTask} value={props}></input>
            <span style={{ textDecoration: props.complete && 'line-through' }}>{props.value}</span>
            <button onClick={deleteTask} value={props}>Delete</button>
        </div>
    );
};

export default TodoList;