import { connect } from './state';

import { Controls, Counter } from './components';

export const ControlsContainer = connect(Controls, {
	decrement: 'actions.decrement',
	increment: 'actions.increment',
});

export const CounterContainer = connect(Counter, {
	value: 'state.value',
});
