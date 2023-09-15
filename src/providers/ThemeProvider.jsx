import React, { useState, useMemo } from 'react';
import { FSM } from 'finite-state-machine';

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
	const [machineState, setMachineState] = useState('light');

	const machine = useMemo(
		() =>
			new FSM({
				id: 'darkModeMachine',
				initialState: 'light',
				transitions: {
					light: { toggle: toggleTheme },
					dark: { toggle: toggleTheme },
				},
			}),
		[]
	);

	function toggleTheme() {
		const prevTheme = machine.state;
		machine.state = prevTheme === 'light' ? 'dark' : 'light';
		const theme = machine.state;

		document.body.classList.add(`${theme}-mode`);
		document.body.classList.remove(`${prevTheme}-mode`);
	}

	const _dispatch = (action) => {
		machine.dispatch(action);
		setMachineState(machine.state);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme: machineState,
				dispatch: _dispatch,
				buttonColor: machineState === 'dark' ? 'grey' : 'black',
				inverted: machineState === 'dark',
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
