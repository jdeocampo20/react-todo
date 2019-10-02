import React from 'react';
import Container from '@material-ui/core/Container';

import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = props => (
    <Container maxWidth='sm' className='todo-list'>
        {props.todoList.map(todo => (
            <TodoItem
                key={todo.id}
                {...todo}
                toggleTask={props.toggleTask}
                deleteTask={props.deleteTask}
            />
        ))}
    </Container>
);

export default TodoList;
