import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './TodoForm.scss';

const TodoForm = props => {
    const [todo, setTodo] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit(todo);
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <TextField
                type='text'
                variant='outlined'
                className='add-todo-field'
                value={todo}
                onChange={event => setTodo(event.target.value)}
            />
            <Button type='submit' variant='contained' color='secondary'>
                <Icon>add</Icon>
            </Button>
        </form>
    );
};

export default TodoForm;
