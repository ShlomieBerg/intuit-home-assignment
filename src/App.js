import Header from './components/Header/Header.jsx';
import TaxCalculator from './components/TaxCalculator/TaxCalculator.jsx';
import { ThemeProvider } from './providers/ThemeProvider.jsx';
import './App.css';

function App()
{


  return (
    <ThemeProvider>
      <div className={'mainContainer'}>
        <Header />
        <div className={'bodyContainer'}>
          <TaxCalculator />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
