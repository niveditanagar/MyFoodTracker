import React, { Component } from 'react';
import './styles.css'

class FoodItems extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.foods && this.props.foods.map(x => <li className="list-group-item" key={x}>{x}</li>)}
                </ul>
            </div>
        );
    }

}

export default FoodItems;