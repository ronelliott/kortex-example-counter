import React from 'react';

export const Counter = ({ value }) => <span>{value}</span>

export const Controls = ({ decrement, increment }) => (
	<div>
		<button onClick={decrement}>Decrement</button>
		<button onClick={increment}>Increment</button>
	</div>
)
