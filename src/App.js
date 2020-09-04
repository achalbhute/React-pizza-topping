
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Topping from './Topping/Topping';

const app = () => {
    const [toppingsState, setToppingsState] = useState(
        [
            'Pizza Base'
        ]
    );

    const [otherState, setOtherState] = useState('');

    console.log('toppingState, otherState : ', toppingsState, otherState);

    const switchEvent = () => {
        console.log('event called');
        setToppingsState(
            [
                ...toppingsState,
                document.getElementById('test').value
            ]
        );

        setOtherState('')
    }

    const handleChange = (event) => {
        setOtherState(event.target.value)
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <hr />
            <input type='text' id='test' value={otherState} onChange={handleChange}></input><button onClick={switchEvent}> Add Item  </button>
            <Topping toppings={toppingsState} />
        </div>
    );
}

export default app;
