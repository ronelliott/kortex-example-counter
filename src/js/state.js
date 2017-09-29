const KEY = "value";

const decrement = ({ state }) => state.set(KEY, state.get(KEY) - 1)
const increment = ({ state }) => state.set(KEY, state.get(KEY) + 1)

const state = {};
state[KEY] = 0;

module.exports = {
	state,
	actions: {
		decrement,
		increment,
	},
};
