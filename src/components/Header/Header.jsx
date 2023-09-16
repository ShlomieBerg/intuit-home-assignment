import { ToggleThemeButton } from '../ToggleThemeButton/';
import './Header.css';

const Header = () => {
	return (
		<div className={'headerContainer'}>
			<ToggleThemeButton />
			<div className={'headerParagraph'}>
				<h2>Shlomie Berg</h2>
				<h3>Software Engineer.</h3>
			</div>
		</div>
	);
};

export default Header;
