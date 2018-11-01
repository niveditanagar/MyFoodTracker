import React, { Component } from 'react';
import './App.css';
import FoodTracker from './components/FoodTracker/FoodTracker';

class App extends Component {

  render() {
    return (
      <main className="container">
        <FoodTracker />
      </main>
    );
  }

}

export default App;
