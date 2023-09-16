import { TaxCalculator, Header } from './components';
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
