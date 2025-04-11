
import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { Plus, Minus, X, Divide, Equal } from 'lucide-react';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('');
  const [firstOperand, setFirstOperand] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(display);
    } else if (operator) {
      const result = calculate(parseFloat(firstOperand), inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(String(result));
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand: number, secondOperand: number, operator: string): number => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    if (!operator || firstOperand === null) return;

    const inputValue = parseFloat(display);
    const result = calculate(parseFloat(firstOperand), inputValue, operator);
    
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator-container w-full max-w-sm mx-auto bg-calculatorDark rounded-lg shadow-2xl overflow-hidden">
      <Display value={display} />
      
      <div className="grid grid-cols-4 gap-2 p-4">
        <Button variant="clear" onClick={clearDisplay} className="col-span-2">C</Button>
        <Button variant="operation" onClick={() => performOperation('/')}><Divide size={20} /></Button>
        <Button variant="operation" onClick={() => performOperation('*')}><X size={20} /></Button>
        
        <Button onClick={() => inputDigit('7')}>7</Button>
        <Button onClick={() => inputDigit('8')}>8</Button>
        <Button onClick={() => inputDigit('9')}>9</Button>
        <Button variant="operation" onClick={() => performOperation('-')}><Minus size={20} /></Button>
        
        <Button onClick={() => inputDigit('4')}>4</Button>
        <Button onClick={() => inputDigit('5')}>5</Button>
        <Button onClick={() => inputDigit('6')}>6</Button>
        <Button variant="operation" onClick={() => performOperation('+')}><Plus size={20} /></Button>
        
        <Button onClick={() => inputDigit('1')}>1</Button>
        <Button onClick={() => inputDigit('2')}>2</Button>
        <Button onClick={() => inputDigit('3')}>3</Button>
        <Button variant="equals" onClick={handleEquals} className="row-span-2"><Equal size={20} /></Button>
        
        <Button onClick={() => inputDigit('0')} className="col-span-2">0</Button>
        <Button onClick={inputDecimal}>.</Button>
      </div>
    </div>
  );
};

export default Calculator;
