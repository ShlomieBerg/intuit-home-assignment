import { useState, useRef, useEffect } from 'react';
import { FSM } from 'finite-state-machine';
import { Step, Button, Loader, Dimmer } from 'semantic-ui-react';
import {
	PersonalInformation,
	RelationshipStatus,
	TaxSummary,
} from './components';

const TAX_STATE_URL = 'http://127.0.0.1:3001/tax-refund-machine';
const TaxCalculator = () => {
	const machineRef = useRef(null);
	const [step, setStep] = useState(null);

	useEffect(() => {
		fetch(TAX_STATE_URL)
			.then((res) => res.json())
			.then((res) => {
				const actions = res.stateActions;
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

				machineRef.current = new FSM(res.initialState, transitions);

				setStep(res.initialState);
			})
			.catch((e) => console.error(e));
	}, []);

	if (!machineRef.current) {
		return (
			<Dimmer active inverted>
				<Loader />
			</Dimmer>
		);
	}

	function setNextState(nextState) {
		if (!machineRef) {
			return;
		}
		machineRef.current.state = nextState;
		setStep(machineRef.current.state);
	}

	return (
		<div style={{ margin: '2em auto 0' }}>
			<Step.Group ordered>
				<Step completed={step > 1} active={step === '1'}>
					<Step.Content>
						<Step.Title>Personal Information</Step.Title>
					</Step.Content>
				</Step>

				<Step completed={step > 2} active={step === '2'}>
					<Step.Content>
						<Step.Title>Relationship Status</Step.Title>
						<Step.Description>
							What is your relationship status
						</Step.Description>
					</Step.Content>
				</Step>

				<Step completed={step === 3}>
					<Step.Content>
						<Step.Title>Summary</Step.Title>
					</Step.Content>
				</Step>
			</Step.Group>
			<div style={{ height: '300px' }}>
				{step === '1' && <PersonalInformation />}
				{step === '2' && <RelationshipStatus />}
				{step === '3' && <TaxSummary />}
			</div>
			<div style={{ margin: '50px 0 0 auto' }}>
				<Button
					content="Back"
					onClick={() => machineRef.current.dispatch('prev')}
					disabled={step === '1'}
				/>
				<Button
					content="Next"
					onClick={() => machineRef.current.dispatch('next')}
					disabled={step === '3'}
				/>
			</div>
		</div>
	);
};

export default TaxCalculator;
