import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';

import './TodoItem.scss';
import TodoFormDialog from '../TodoFormDialog';

const TodoItem = props => {
    const toggleTask = () => {
        props.toggleTask(props.id);
    };

    const deleteTask = () => {
        props.deleteTask(props.id);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTaskDetails = updatedTask => {
        updatedTask.taskId = props.id;
        props.updateTaskDetails(updatedTask);
        setOpen(false);
    };

    return (
        <div className='flex-row-space-between'>
            <div className='flex-row-center'>
                <Checkbox
                    type='checkbox'
                    onClick={toggleTask}
                    value={props.complete}
                ></Checkbox>
                <div
                    className='flex-row-space-between editable-row'
                    onClick={handleClickOpen}
                    style={{ textDecoration: props.complete && 'line-through' }}
                >
                    <span>
                        <Typography variant='h5' display='inline'>
                            {props.value}
                        </Typography>
                    </span>
                    <span>
                        <Typography variant='subtitle2' display='inline'>
                            {moment(props.dueDate).format('ddd MMM DD')}
                        </Typography>
                    </span>
                </div>
            </div>
            <IconButton aria-label='delete' onClick={deleteTask}>
                <Icon>delete</Icon>
            </IconButton>
            <TodoFormDialog
                open={open}
                onClose={handleClose}
                taskName={props.value}
                dueDate={props.dueDate}
                updateTaskDetails={updateTaskDetails}
            />
        </div>
    );
};

export default TodoItem;
