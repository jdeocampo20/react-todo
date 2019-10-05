import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import './TodoForm.scss';

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
                <div className='add-todo-field'>
                    <TextField
                        className='task-name-field'
                        type='text'
                        variant='outlined'
                        value={todo}
                        onChange={event => setTodo(event.target.value)}
                    />
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePicker
                            className='due-date-field'
                            value={selectedDate}
                            onChange={handleDateChange}
                            inputVariant='outlined'
                            variant='inline'
                            format='MMM DD'
                            autoOk
                            disablePast
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <Button type='submit' variant='contained' color='secondary'>
                    <Icon>add</Icon>
                </Button>
            </form>
        </Container>
    );
};

export default TodoForm;
