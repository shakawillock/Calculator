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

function display(value) {
  calculatorDisplay.textContent = value;
}

function addDecimalToDisplay(e) {
  // eslint-disable-next-line no-use-before-define
  updateDisplayValue(e);
}

function checkForDecimal() {
  if (displayValue.includes('.')) {
    decimalBtn.removeEventListener('click', addDecimalToDisplay);
  } else {
    decimalBtn.addEventListener('click', addDecimalToDisplay);
  }
}

function updateDisplayValue(e) {
  displayValue += e.target.textContent;
  checkForDecimal();
  display(displayValue);
}

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

function roundDecimals(result) {
  if (!Number.isInteger(result)) {
    return +result.toFixed(3);
  }
  return false;
}

function deleteNumber() {
  displayValue = displayValue.slice(0, -1);
  display(displayValue);
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

function getCalculatorInputs(e) {
  if (operatorValue) {
    firstNumber = operate(operatorValue, Number(firstNumber), Number(displayValue));
  } else {
    firstNumber = displayValue;
  }
  operatorValue = e.target.textContent;
  displayValue = '';
}

function checkInputs() {
  if (operatorValue && firstNumber && secondNumber) {
    if (secondNumber === 0) {
      // eslint-disable-next-line no-alert
      alert("You can't divide by 0!");
    } else {
      operate(operatorValue, Number(firstNumber), Number(secondNumber));
    }
  }
}

numberBtns.forEach((number) => {
  number.addEventListener('click', updateDisplayValue);
});

decimalBtn.addEventListener('click', addDecimalToDisplay);

operatorBtns.forEach((operator) => {
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
