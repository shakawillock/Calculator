const calculatorDisplay = document.querySelector('.calculator__display');
const numberBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const equalBtn = document.querySelector('.btn-equals');
const decimalBtn = document.querySelector('.btn-decimal');
const clearBtn = document.querySelector('.btn-clear');
const backspaceBtn = document.querySelector('.btn-backspace');

let displayValue = '';
let operatorValue;
let firstNumber;
let secondNumber;

numberBtns.forEach(number => {
    number.addEventListener('click', updateDisplayValue);
});

decimalBtn.addEventListener('click', addDecimalToDisplay);

operatorBtns.forEach(operator => {
  operator.addEventListener('click', getCalculatorInputs);
});

equalBtn.addEventListener('click', () => {
  secondNumber = displayValue;
  checkInputs();
});

clearBtn.addEventListener('click', () => {
  clearDisplay();
  reset();
});

backspaceBtn.addEventListener('click', deleteNumber);

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function remainder(number1, number2) {
  return number1 % number2;
}

function display(value) {
  calculatorDisplay.textContent = value;
}

function updateDisplayValue(e) {
  displayValue += e.target.textContent;
  checkForDecimal();
  display(displayValue);
}

function getCalculatorInputs(e) {
  if (operatorValue) {
    firstNumber = operate(operatorValue, Number(firstNumber), Number(displayValue));
  } else {
    firstNumber = displayValue;
  }
  operatorValue = e.target.textContent;
  displayValue = '';
}

function deleteNumber() {
  displayValue = displayValue.slice(0, -1); 
  display(displayValue);
}

function addDecimalToDisplay(e) {
  updateDisplayValue(e);
}

function checkForDecimal() {
  if (displayValue.includes('.')) {
    decimalBtn.removeEventListener('click', addDecimalToDisplay);
  } else {
    decimalBtn.addEventListener('click', addDecimalToDisplay);
  }
}

function roundDecimals(result) {
  if (!Number.isInteger(result)) {
    return +result.toFixed(3);
  }
}

function checkInputs() {
  if (operatorValue && firstNumber && secondNumber) {
    if (secondNumber == 0) {
      alert("You can't divide by 0!");
    } else {
      operate(operatorValue, Number(firstNumber), Number(secondNumber));
    }
  } 
}

function operate(operator, number1, number2) {
  let result;

  if (operator === '+') {
    result = add(number1, number2);
  } else if (operator === '-') {
    result = subtract(number1, number2);
  } else if (operator === '*') {
    result = multiply(number1, number2);
  } else if (operator === '/') {
    result = divide(number1, number2);
  } else {
    result = remainder(number1, number2);
  }

  if (roundDecimals(result)) {
    result = roundDecimals(result);
  }
  
  display(result);
  backspaceBtn.removeEventListener('click', deleteNumber);
  return result;
}

function clearDisplay() {
  displayValue = '';
  display(displayValue);
}

function reset() {
  operatorValue = undefined;
  firstNumber = undefined;
  secondNumber = undefined;
  backspaceBtn.addEventListener('click', deleteNumber);
}