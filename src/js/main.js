import React from 'react';
import ReactDOM from 'react-dom';

import './state';
import { ControlsContainer, CounterContainer } from './containers';

ReactDOM.render(
	<div>
		<ControlsContainer />
		<CounterContainer />
	</div>,
document.getElementById('app-container'));
