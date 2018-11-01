import React, { Component } from 'react';
import FoodAddBar from '../FoodAddBar/FoodAddBar';
import FoodItems from '../FoodItems/FoodItems';
import './styles.css'
import axios from 'axios';

class FoodTracker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            foods: [
            ]
        };

        this.handleFoodAdd = this.handleFoodAdd.bind(this);
    }

    handleFoodAdd(foodItem) {
        const foodItems = [...this.state.foods];
        foodItems.push(foodItem);

        this.setState({ foods: foodItems });

        axios.post('https://localhost:5001/api/food', foodItems)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/food')
            .then(response => this.setState({ foods: response.data }));
    }

    render() {
        return (
            <React.Fragment>
                <FoodAddBar onItemAdd={this.handleFoodAdd} />
                <FoodItems foods={this.state.foods} />
            </React.Fragment>
        );
    }
}

export default FoodTracker;