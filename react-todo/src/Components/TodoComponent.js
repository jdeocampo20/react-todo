import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoComponent = () => {
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
        <div>
            <div>TODO app</div>
            <TodoForm onSubmit={addTodo} />
            <TodoList
                todoList={todoList}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        </div>
    );
};

export default TodoComponent;
