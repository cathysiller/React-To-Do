import React from 'react';
import { ReactComponent } from '*.svg';

export default class TodoInput extends ReactComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        console.log("change here");
    }

    addTodo()

    render() {
        return (
            <div>
                <input type="text" value="" onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
            </div>
        )
    }
}
