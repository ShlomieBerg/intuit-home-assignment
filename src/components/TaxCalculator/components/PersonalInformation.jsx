import { useContext } from 'react';
import { Form } from 'semantic-ui-react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const PersonalInformation = () => {
	const { inverted } = useContext(ThemeContext);
	return (
		<Form inverted={inverted}>
			<Form.Input label="First name" placeholder="First Name" />
			<Form.Input label="Middle Name" placeholder="Middle Name" />
			<Form.Input label="Last Name" placeholder="Last Name" />
		</Form>
	);
};

export default PersonalInformation;
