import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton.jsx';

const Header = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'col',
				padding: '2em 0',
				backgroundColor: 'lightgray',
			}}
		>
			<ToggleThemeButton />
			<div style={{ color: '#365ebf', width: '100%', textAlign: 'center' }}>
				<h2>Shlomie Berg</h2>
				<h3>Software Engineer.</h3>
			</div>
		</div>
	);
};

export default Header;
