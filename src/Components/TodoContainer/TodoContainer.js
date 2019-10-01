import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import './TodoContainer.scss'
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = todo => {
        setTodoList([
            ...todoList,
            {
                id: todoList.length,
                value: todo,
                complete: false
            }
        ]);
    };

    const toggleTask = taskId => {
        todoList[taskId].complete = !todoList[taskId].complete;
        setTodoList([...todoList]);
    };

    const deleteTask = taskId => {
        setTodoList(
            todoList.filter(t => {
                return t.id !== taskId;
            })
        );
    };

    return (
        <Container maxWidth='md' className='todo-container'>
            <TodoForm onSubmit={addTodo} />
            <TodoList
                className='todo-list'
                todoList={todoList}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        </Container>
    );
};

export default TodoContainer;
