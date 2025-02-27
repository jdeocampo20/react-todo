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
                value: todo.taskName,
                complete: false,
                dueDate: todo.dueDate
            }
        ]);
        setId(id + 1);
    };

    const toggleTask = taskId => {
        const taskIndex = todoList.findIndex(t => t.id === taskId);
        todoList[taskIndex].complete = !todoList[taskIndex].complete;
        setTodoList([...todoList]);
    };

    const deleteTask = taskId => {
        setTodoList(
            todoList.filter(t => {
                return t.id !== taskId;
            })
        );
    };

    const updateTaskDetails = updatedTask => {
        const taskIndex = todoList.findIndex(t => t.id === updatedTask.taskId);
        todoList[taskIndex].value = updatedTask.taskName;
        todoList[taskIndex].dueDate = updatedTask.dueDate;

        setTodoList([...todoList]);
    }

    return (
        <Container maxWidth='md' className='todo-container'>
            <TodoForm onSubmit={addTodo} />
            <TodoList
                className='todo-list'
                todoList={todoList}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                updateTaskDetails={updateTaskDetails}
            />
        </Container>
    );
};

export default TodoContainer;
