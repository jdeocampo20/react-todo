import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoComponent = () => {
    const [todoList, setTodo] = useState([]);

    const addTodo = (todo) => {
        setTodo([...todoList, 
            {
                id: todoList.length,
                value: todo
            }
        ]);
    };

    return (
        <div>
            <div>TODO app</div>
            <TodoForm onSubmit={addTodo}/>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoComponent;