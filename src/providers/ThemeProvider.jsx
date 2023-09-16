import React, { useState, useRef, useEffect } from 'react';
import { FSM } from 'finite-state-machine';
import { DARK_MODE_MACHINE_URL, DARK_MODE_MACHINE_URL_DEV } from '../consts';

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(null);
	const machineRef = useRef(null);

	useEffect(() => {
		fetch(DARK_MODE_MACHINE_URL)
			.then((res) => res.json())
			.then((res) => {
				const { id, initialState, transitions } = res;

				machineRef.current = FSM.getInstance({
					id,
					initialState,
					transitions,
				});

				setTheme(initialState);
			})
			.catch((e) => console.error(e));
	}, []);

	const _dispatch = (action) => {
		const machine = machineRef.current;
		const prevTheme = machine.state;
		machine.dispatch(action);
		const currTheme = machine.state;

		document.body.classList.add(`${currTheme}-mode`);
		document.body.classList.remove(`${prevTheme}-mode`);
		setTheme(machine.state);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				dispatch: _dispatch,
				buttonColor: theme === 'dark' ? 'grey' : 'black',
				inverted: theme === 'dark',
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
