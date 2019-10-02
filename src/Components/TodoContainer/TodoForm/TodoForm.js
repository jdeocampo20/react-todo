import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './TodoForm.scss';

class TodoForm extends React.Component {
    state = { todo: '' };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.todo);
        this.setState({ todo: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='todo-form'>
                <TextField
                    type='text'
                    variant='outlined'
                    className='add-todo-field'
                    value={this.state.todo}
                    onChange={event =>
                        this.setState({ todo: event.target.value })
                    }
                />
                <Button type='submit' variant='contained' color='secondary'>
                    <Icon>add</Icon>
                </Button>
            </form>
        );
    }
}

export default TodoForm;
