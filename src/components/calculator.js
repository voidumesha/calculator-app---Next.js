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
      setResult(eval(input)); 
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
        <button className={styles.button} onClick={() => handleClick('1')}>1</button>
        <button className={styles.button} onClick={() => handleClick('2')}>2</button>
        <button className={styles.button} onClick={() => handleClick('3')}>3</button>
        <button className={styles.button} onClick={() => handleClick('+')}>+</button>
        <button className={styles.button} onClick={() => handleClick('4')}>4</button>
        <button className={styles.button} onClick={() => handleClick('5')}>5</button>
        <button className={styles.button} onClick={() => handleClick('6')}>6</button>
        <button className={styles.button} onClick={() => handleClick('-')}>-</button>
        <button className={styles.button} onClick={() => handleClick('7')}>7</button>
        <button className={styles.button} onClick={() => handleClick('8')}>8</button>
        <button className={styles.button} onClick={() => handleClick('9')}>9</button>
        <button className={styles.button} onClick={() => handleClick('*')}>*</button>
        <button className={styles.button} onClick={clearInput}>C</button>
        <button className={styles.button} onClick={() => handleClick('0')}>0</button>
        <button className={styles.button} onClick={calculateResult}>=</button>
        <button className={styles.button} onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}
