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
        axios.post('https://localhost:5001/api/food', {
            FoodItem: foodItem
        })
            .then(response => {
                const foodItems = [...this.state.foods];
                foodItems.push(foodItem);
                this.setState({ foods: foodItems });
            })
            .catch(error => console.log("POST: ", error));
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/food')
            .then(response => this.setState({ foods: response.data }))
            .catch(error => console.log("GET: ", error));
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