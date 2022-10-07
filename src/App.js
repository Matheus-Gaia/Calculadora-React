import './App.css';
import { useState } from 'react';
import Display from './components/display/Display';
import Keyboard from './components/keyboard/Keyboard';

function App() {

  const [initialState, setInitialState] = useState({
    displayValue: 2200,
    clearDisplay: false, 
    operation: null, 
    values: [0, 0],
    current: 0
    })

  return (
    <div className="App">
      <h2>Caluladora</h2>
      <div className="Calc">
        <Display displayValue={initialState.displayValue}/>
        <Keyboard/>
      </div>
    </div>
  );
}

export default App;
