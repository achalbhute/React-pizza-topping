import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name}. I lives in {props.city}.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;