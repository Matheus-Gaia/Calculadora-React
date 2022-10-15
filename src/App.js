import './App.css';
import { useState } from 'react';
import Display from './components/display/Display';
import Keyboard from './components/keyboard/Keyboard';

function App() {

  const [displayValue, setDisplayValue] = useState(0)
  const [number, setNumber] = useState(0)
  const [operator, setOperator] = useState()



  const handleClick = (value) => {
    
    if (typeof (value) === "number" || value === ".") { 
       handleDisplay(value)
    } else {    
      setOperator(value)
      setNumber(parseInt(displayValue))
      setDisplayValue(0)
    }

    value === "=" ? calc() : action(value)
  }

  const handleDisplay = (value) => {
    if(value === ".") {
      displayValue.toString().includes(".") ? setDisplayValue(displayValue) : setDisplayValue("" + displayValue + value)
    } else {
      displayValue === 0 ? setDisplayValue(value) : setDisplayValue("" + displayValue + value)
    }
  }

  const action = (btnName) => {
    if(btnName === "%") {
      let result = number * (displayValue/100)
      setDisplayValue(result)
    }

    if(btnName === "Clear") {
      setDisplayValue(0)
      setNumber(0)
    }

    if(btnName === "+/-") {
      setDisplayValue(displayValue * -1)
    }

    if(btnName === "x <-") {
      let erase = displayValue.toString().slice(0, -1)
      let size = erase.length
      size <= 0 ? setDisplayValue(0) : setDisplayValue(erase)
    }
  }

  const calc = () => {
    if (operator === "+") {
      setDisplayValue(number + parseInt(displayValue))
    }

    if (operator === "-") {
      setDisplayValue(number - parseInt(displayValue))
    }

    if (operator === "*") {
      let result = number * parseInt(displayValue)
      setDisplayValue(result)
    }

    if (operator === "/") {
      let result = number / parseInt(displayValue)
      result.toString().length > 6 ? setDisplayValue(result.toFixed(3)) : setDisplayValue(result)
    }
  }

  return (
    <div className="App">
      <h2>Caluladora</h2>
      <div className="Calc">
        <Display displayValue={displayValue} />
        <Keyboard handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
