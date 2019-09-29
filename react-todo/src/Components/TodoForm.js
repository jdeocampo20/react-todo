import React from 'react';

class TodoForm extends React.Component {
    state = { todo: '' };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.todo);
        this.setState({ todo: '' })
    };

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="todo"
                    value={this.state.todo} 
                    onChange={event => this.setState({ todo: event.target.value })}/>
                    <button>Add item</button>
            </form>
        );
    }
}

export default TodoForm;