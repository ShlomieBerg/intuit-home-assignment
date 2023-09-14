import Welcome from './components/Welcome/Welcome.jsx';
import ToggleThemeButton from './components/ToggleThemeButton/ToggleThemeButton.jsx';
import './App.css';

function App()
{


  return (
    <div>
      <ToggleThemeButton />
      <Welcome />
    </div>
  );
}

export default App;
