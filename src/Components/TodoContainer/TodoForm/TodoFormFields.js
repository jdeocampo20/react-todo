import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import TextField from '@material-ui/core/TextField';

import './TodoForm.scss'

const TodoFormFields = props => {
    return (
        <div className='add-todo-field'>
            <TextField
                className='task-name-field'
                type='text'
                variant='outlined'
                value={props.todo}
                onChange={event => props.setTodo(event.target.value)}
            />
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    className='due-date-field'
                    value={props.selectedDate}
                    onChange={props.handleDateChange}
                    inputVariant='outlined'
                    variant='inline'
                    format='MMM DD'
                    autoOk
                    disablePast
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default TodoFormFields;
