import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

import TodoFormFields from './TodoForm/TodoFormFields';

const TodoFormDialog = props => {
    const handleClose = () => {
        props.onClose();
    };

    const [selectedDate, setSelectedDate] = useState(props.dueDate);
    const [todo, setTodo] = useState(props.taskName);

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const updateTaskDetails = () => {
        props.updateTaskDetails({taskName: todo, dueDate: selectedDate});
    }

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <DialogContent>
                <TodoFormFields
                    todo={todo}
                    setTodo={setTodo}
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Cancel
                </Button>
                <Button onClick={updateTaskDetails} color='primary'>
                    Okay
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TodoFormDialog;
