import React, { Component } from 'react';

class Addfood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '',
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label> Name</label>
          <input type="text" name="name" value={this.state.names} />

          <label> Calories</label>
          <input type="text" name="Calories" value={this.state.calories} />

          <label> Image</label>
          <input type="text" name="Image" value={this.state.image} />

          <label> Quantity</label>
          <input type="text" name="Quantity" value={this.state.quantity} />

          <button> Create Food</button>
        </form>
      </div>
    );
  }
}

export default Addfood;
