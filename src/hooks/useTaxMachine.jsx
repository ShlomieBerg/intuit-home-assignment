import { useState, useRef, useEffect } from 'react';
import { FSM } from 'finite-state-machine';
import { TAX_MACHINE_URL, TAX_MACHINE_URL_DEV } from '../consts';

export const useTaxMachine = () => {
	const [step, setStep] = useState(null);
	const machineRef = useRef(null);

	useEffect(() => {
		fetch(TAX_MACHINE_URL)
			.then((res) => res.json())
			.then((res) => {
				const { id, initialState, transitions } = res;

				machineRef.current = FSM.getInstance({
					id,
					initialState,
					transitions,
				});

				setStep(initialState);
			})
			.catch((e) => console.error(e));
	}, []);

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
