import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Rupam', city: 'Bhuwneshwar' },
      { name: 'Dolly', city: 'Nagpur' }
    ]
  }

  switchEvent = () => {
    console.log('event called');
    this.setState({
      persons: [
        { name: 'Rupam', city: 'Bhuwneshwar' },
        { name: 'Savita', city: 'Nagpur' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person
          name='Dolly' city='Nagpur'
          click={this.switchEvent}>My Hobby : Sketching</Person>
        <Person name='Achal' city='Mumbai' />
        <Person name={this.state.persons[0].name} city={this.state.persons[0].city} />
        <Person name={this.state.persons[1].name} city={this.state.persons[1].city} />
        <button onClick={this.switchEvent}> switch it </button>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'I\'m Achal'), React.createElement(Person));
  }
}

export default App;
