import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';

import './TodoForm.scss';
import TodoFormFields from './TodoFormFields';

const TodoForm = props => {
    const [todo, setTodo] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit({ taskName: todo, dueDate: selectedDate });
        setTodo('');
    };

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit} className='todo-form'>
                <TodoFormFields
                    todo={todo}
                    setTodo={setTodo}
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                />
                <Button type='submit' variant='contained' color='secondary'>
                    <Icon>add</Icon>
                </Button>
            </form>
        </Container>
    );
};

export default TodoForm;
