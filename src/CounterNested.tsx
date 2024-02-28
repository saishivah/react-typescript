import React from 'react';

type CounterNestedProps = {
    counter: number;
};

const CounterNested: React.FC<CounterNestedProps> = (props) => {
    // Create an array of 1000 elements and map each element to a <div> element
    const divs = new Array(1000).fill(null).map((_, index) => (
        // Pass props.counter as a prop to each div
        <div key={index}>Div {index} - Counter: {props.counter}</div>
    ));

    return (
        <div>
            <div>The Nested counter value: {props.counter}</div>
            {/* Render the array of div elements */}

        </div>
    );
};

export default CounterNested; // Export as default
