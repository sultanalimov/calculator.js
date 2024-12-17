import { useState, useEffect } from "react";
import Controls from "./Controls";
import Display from "./Display";
import styels from "../Styles/calculator.module.css";

const Calculator = () => {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState('0');

  const handleKeyPress = (event) => {
    const key = event.key;

    if (/[0-9]/.test(key)) {
      setInput((prevInput) => (prevInput === '0' ? key : prevInput + key));
    } else if (key === 'Enter') {
      try {
        setOutput(eval(input));
      } catch (e) {
        setOutput("Error");
      }
    } else if (key === 'Backspace') {
      setInput((prevInput) => (prevInput.length > 1 ? prevInput.slice(0, -1) : '0'));
    } else if (key === 'Escape') {
      setInput('0');
      setOutput(0);
    } else if (['+', '-', '*', '/'].includes(key)) {
      setInput((prevInput) => prevInput + key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={styels.calculatorLayout}>
      <Display input={input} output={output} />
      <hr />
      <Controls input={input} output={output} setInput={setInput} setOutput={setOutput} />
    </div>
  );
};

export default Calculator;
