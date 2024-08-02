// src/components/Calculator.js
import { useState } from 'react';
import styles from './calculator.module.css';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult(0);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Note: using eval can be dangerous. This is for simplicity only.
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div>{input}</div>
        <div>{result}</div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '300px',
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    fontSize: '24px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 75px)',
    gridGap: '10px',
  },
  button: {
    width: '75px',
    height: '75px',
    fontSize: '24px',
    borderRadius: '10px',
  },
};
