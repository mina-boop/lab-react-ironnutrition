import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import Foodbox from './Components/Foodbox';
import Dynamicfoodlist from './Components/Dynamicfoodlist';

class App extends Component {
  state = {
    foods: foodsJSON,
  };
  render() {
    return (
      <div className="App">
        <button>Create Form</button>
        <Dynamicfoodlist />
        {this.state.foods.map((menue) => {
          return (
            <Foodbox
              key={menue.name}
              calories={menue.calories}
              image={menue.image}
              quantity={menue.quantity}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
