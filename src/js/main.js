import React from "react";
import ReactDOM from "react-dom";
import { modules } from "kortex";

import {
	ControlsContainer,
	CounterContainer,
} from "./containers";
import state from "./state";

modules([
	[ "counter", state ],
])

ReactDOM.render(
	<div>
		<ControlsContainer />
		<CounterContainer />
	</div>,
document.getElementById("app-container"));
