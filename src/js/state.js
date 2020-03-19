const KEY = 'value';

const decrement = ({ state }) => state.set(KEY, state.get(KEY) - 1);
const increment = ({ state }) => state.set(KEY, state.get(KEY) + 1);

import { Actions, Connector, State } from 'kortex';

export const actions = new Actions({
	decrement,
	increment,
});

export const state = new State({
	[KEY]: 0,
});

export const connector = new Connector(actions, state);
export const connect = connector.connect.bind(connector);
