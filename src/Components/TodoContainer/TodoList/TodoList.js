import React from 'react';

import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = props => (
    <div className='todo-list'>
        {props.todoList.map(todo => (
            <TodoItem
                key={todo.id}
                {...todo}
                toggleTask={props.toggleTask}
                deleteTask={props.deleteTask}
            />
        ))}
    </div>
);

export default TodoList;
