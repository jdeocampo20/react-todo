import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import './TodoContainer.scss'
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';

const TodoContainer = () => {
    const [id, setId] = useState(1);
    const [todoList, setTodoList] = useState([]);

    const addTodo = todo => {
        setTodoList([
            ...todoList,
            {
                id: id,
                value: todo,
                complete: false
            }
        ]);
        setId(id + 1);
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
