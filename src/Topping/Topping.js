import React from 'react';


const topping = (props) => {
    const listIngrediants = props.toppings.map((ingrediant) => <li key={ingrediant}>{ingrediant}</li>);
    return (
        <div>
            <ul>
                {listIngrediants}
            </ul>
        </div>
    )
}

export default topping;