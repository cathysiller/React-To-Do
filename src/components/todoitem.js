import React from 'react';
import './todoItem.css'

export default class todoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div className="todoWrapper">
                <button class="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>
                    remove
                </button>
                {this.props.todo.text}
            </div>
        )
    }
}