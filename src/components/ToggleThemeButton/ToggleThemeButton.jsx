import { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { ThemeContext } from '../../providers/ThemeProvider';
import './ToggleThemeButton.css';

const ToggleThemeButton = () => {
	const { theme, dispatch, inverted, buttonColor } = useContext(ThemeContext);
	return (
		<div className={'toggleThemeButtonContainer'}>
			<Button
				active={inverted}
				onClick={() => dispatch('toggle')}
				circular
				toggle
				color={buttonColor}
				content={theme}
				loading={!theme}
			/>
		</div>
	);
};

export default ToggleThemeButton;
