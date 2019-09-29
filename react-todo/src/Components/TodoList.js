import React from 'react';

const TodoList = (props) => (
	<div>
  	    {props.todoList.map(todo => <div key={todo.id}>{todo.value}</div>)}
	</div>
);

export default TodoList;