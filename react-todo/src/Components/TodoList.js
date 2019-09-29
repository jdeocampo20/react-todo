import React from 'react';

const TodoList = (props) => (
	<div>
  	    {props.todoList.map(todo => <TodoItem key={todo.id} {...todo} completeTask={props.completeTask}/>)}
	</div>
);

const TodoItem = (props) => {
    const completeTask = () => {
        props.completeTask(props.id);
    };

    return (
        <div>
            <input type='checkbox' onClick={completeTask} value={props}></input>
            <span style={{ textDecoration: props.complete && 'line-through' }}>{props.value}</span>
        </div>
    );
};

export default TodoList;