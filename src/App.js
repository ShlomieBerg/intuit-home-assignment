import Header from './components/Header/Header.jsx';
import TaxCalculator from './components/TaxCalculator/TaxCalculator.jsx';
import './App.css';

function App()
{


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />
      <div style={{ height: '100%', margin: '0 auto' }}>
        <TaxCalculator />
      </div>
    </div>
  );
}

export default App;
