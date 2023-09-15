import { useContext } from 'react';
import { Step, Button, Loader, Dimmer } from 'semantic-ui-react';
import {
	PersonalInformation,
	RelationshipStatus,
	TaxSummary,
} from './components';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useTaxMachine } from '../../hooks/useTaxMachine';

const TaxCalculator = () => {
	const { buttonColor } = useContext(ThemeContext);

	const { step, dispatch, isFirstStep, isSecondStep, isThirdStep } =
		useTaxMachine();

	if (!step) {
		return (
			<Dimmer active inverted>
				<Loader />
			</Dimmer>
		);
	}

	return (
		<div style={{ margin: '2em auto 0' }}>
			<Step.Group ordered>
				<Step completed={isSecondStep || isThirdStep} active={isFirstStep}>
					<Step.Content>
						<Step.Title>Personal Information</Step.Title>
					</Step.Content>
				</Step>

				<Step completed={isThirdStep} active={isSecondStep}>
					<Step.Content>
						<Step.Title>Relationship Status</Step.Title>
						<Step.Description>
							What is your relationship status
						</Step.Description>
					</Step.Content>
				</Step>

				<Step completed={isThirdStep}>
					<Step.Content>
						<Step.Title>Summary</Step.Title>
					</Step.Content>
				</Step>
			</Step.Group>
			<div style={{ height: '300px' }}>
				{isFirstStep && <PersonalInformation />}
				{isSecondStep && <RelationshipStatus />}
				{isThirdStep && <TaxSummary />}
			</div>
			<div style={{ margin: '50px 0 0 auto', float: 'right' }}>
				{(isSecondStep || isThirdStep) && (
					<Button
						color={buttonColor}
						content="Back"
						onClick={() => dispatch('prev')}
					/>
				)}
				{(isFirstStep || isSecondStep) && (
					<Button
						color={buttonColor}
						content="Next"
						onClick={() => dispatch('next')}
					/>
				)}
			</div>
		</div>
	);
};

export default TaxCalculator;
