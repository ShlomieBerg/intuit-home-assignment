import { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { ThemeContext } from '../../providers/ThemeProvider';
// import { useDarkModeMachine } from '../../FSM/DarkModeMachine.jsx';

const ToggleThemeButton = () => {
	const { theme, dispatch, inverted, buttonColor } = useContext(ThemeContext);
	return (
		<div style={{ padding: '0 0.5em' }}>
			<Button
				active={inverted}
				onClick={() => dispatch('toggle')}
				circular
				toggle
				color={buttonColor}
				content={theme}
			/>
		</div>
	);
};

export default ToggleThemeButton;
