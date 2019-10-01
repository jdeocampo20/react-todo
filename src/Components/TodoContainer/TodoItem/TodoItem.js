import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import './TodoItem.scss';

const TodoItem = props => {
    const toggleTask = () => {
        props.toggleTask(props.id);
    };

    const deleteTask = () => {
        props.deleteTask(props.id);
    };

    return (
        <div className='todo-item'>
            <Checkbox
                type='checkbox'
                onClick={toggleTask}
                value={props}
            ></Checkbox>
            <Typography
                variant='h5'
                display='inline'
                style={{ textDecoration: props.complete && 'line-through' }}
            >
                {props.value}
            </Typography>
            <IconButton
                aria-label='delete'
                onClick={deleteTask}
                value={props}
            >
                <Icon>delete</Icon>
            </IconButton>
        </div>
    );
};

export default TodoItem;