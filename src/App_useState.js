import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Rupam', city: 'Bhuwneshwar' },
      { name: 'Dolly', city: 'Nagpur' },
    ]
  });

  const [otherState, setOtherState] = useState({
    other : 'some other state'
  });

  console.log('personsState, otherState : ', personsState, otherState);

  const switchEvent = () => {
    console.log('event called');
    setPersonsState({
      persons: [
        { name: 'Rupam', city: 'Bhuwneshwar' },
        { name: 'Savita', city: 'Nagpur' }
      ]
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Person name='Dolly' city='Nagpur'>My Hobby : Sketching</Person>
      <Person name='Achal' city='Mumbai' />
      <Person name={personsState.persons[0].name} city={personsState.persons[0].city} />
      <Person name={personsState.persons[1].name} city={personsState.persons[1].city} />
      <button onClick={switchEvent}> switch it </button>
    </div>
  );
}

export default app;
