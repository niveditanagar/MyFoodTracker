import React, { Component } from 'react';
import './styles.css'

class FoodAddBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.updateInput = this.updateInput.bind(this);
        this.addClicked = this.addClicked.bind(this);
    }

    render() {
        return (
            <div className="input-group food-bar">
                <input type="text" placeholder="I ate..." value={this.state.input}
                    className="form-control food-item-text-field"
                    onChange={this.updateInput} />
                <button onClick={this.addClicked} className="btn btn-primary">Add</button>
            </div>);
    }

    updateInput(event) {
        this.setState({
            input: event.target.value
        })
    }

    addClicked() {
        if (this.state.input === '') {
            return;
        }

        this.props.onItemAdd(this.state.input);
        this.setState({
            input: ''
        });
    }
}

export default FoodAddBar;