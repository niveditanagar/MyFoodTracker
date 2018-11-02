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
                    {this.props.foods && this.props.foods.map((x, index) => <li className="list-group-item" key={index}>{x}</li>)}
                </ul>
            </div>
        );
    }

}

export default FoodItems;