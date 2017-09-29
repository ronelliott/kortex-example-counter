import { connect } from "kortex";

import {
	Controls,
	Counter,
} from "./components";

export const ControlsContainer = connect({
	decrement: "actions.counter.decrement",
	increment: "actions.counter.increment",
}, Controls);

export const CounterContainer = connect({
	value: "state.counter.value",
}, Counter);
