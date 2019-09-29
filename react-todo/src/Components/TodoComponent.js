import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoComponent = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (todo) => {
        setTodoList([...todoList, 
            {
                id: todoList.length,
                value: todo,
                complete: false
            }
        ]);
    };

    const completeTask = (taskId) => {
        todoList[taskId].complete = !todoList[taskId].complete;
        setTodoList([ ...todoList ]);
    };

    return (
        <div>
            <div>TODO app</div>
            <TodoForm onSubmit={addTodo}/>
            <TodoList todoList={todoList} completeTask={completeTask}/>
        </div>
    );
}

export default TodoComponent;