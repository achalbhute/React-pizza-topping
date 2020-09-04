import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topping from './Topping/Topping';

class App extends Component {
  state = {
    toppings: [
      'pizza base'
    ],
    // topping: ''
  }

  switchEvent = () => {
    console.log(document.getElementById('test').value);
    this.setState({
      toppings: [
        ...this.state.toppings,
        document.getElementById('test').value
      ],
      // topping: '' 
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr />
        <input type='text' id='test' value={this.state.topping}></input><button onClick={this.switchEvent}> Add  </button>
        <Topping toppings={this.state.toppings}/>
      </div>
    );
  }
}

export default App;
