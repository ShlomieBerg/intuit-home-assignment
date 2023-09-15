import { useState, useRef, useEffect } from 'react';
import { FSM } from 'finite-state-machine';

// https://beeceptor.com/console/finite-state-machine
const TAX_STATE_URL =
	'https://finite-state-machine.free.beeceptor.com/tax-refund-machine';

const TAX_STATE_URL_DEV = 'http://localhost:3001/tax-refund-machine';

export const useTaxMachine = () => {
	const [step, setStep] = useState(null);
	const machineRef = useRef(null);

	useEffect(() => {
		fetch(TAX_STATE_URL)
			.then((res) => res.json())
			.then((res) => {
				const actions = res['stateActions'];
				const transitions = Object.keys(actions).reduce(
					(stateActions, state) => {
						stateActions[state] = Object.keys(actions[state]).reduce(
							(transitions, transition) => {
								transitions[transition] = setNextState.bind(
									null,
									actions[state][transition]
								);
								return { ...transitions };
							},
							{}
						);
						return { ...stateActions };
					},
					{}
				);

				machineRef.current = new FSM({
					id: 'taxMachine',
					initialState: res['initialState'],
					transitions,
				});

				setStep(res['initialState']);
			})
			.catch((e) => console.error(e));
	}, []);

	function setNextState(nextState) {
		machineRef.current.state = nextState;
	}

	const _dispatch = (action) => {
		machineRef.current.dispatch(action);
		setStep(machineRef.current.state);
	};

	return {
		step,
		dispatch: _dispatch,
		isFirstStep: step === '1',
		isSecondStep: step === '2',
		isThirdStep: step === '3',
	};
};
