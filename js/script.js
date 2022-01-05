const calculatorDisplay = document.querySelector('.calculator__display');
const numberBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const equalBtn = document.querySelector('.btn-equals');
const decimalBtn = document.querySelector('.btn-decimal');
const clearBtn = document.querySelector('.btn-clear');

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
  clearInputs();
});

function addDecimalToDisplay(e) {
  updateDisplayValue(e);
}

function updateDisplayValue(e) {
  displayValue += e.target.textContent;
  checkForDecimal();
  display(displayValue);
}

function display(value) {
  calculatorDisplay.textContent = value;
}

function getCalculatorInputs(e) {
  if (operatorValue) {
    firstNumber = operate(operatorValue, Number(firstNumber), Number(displayValue));
    operatorValue = e.target.textContent;
  } else {
    operatorValue = e.target.textContent;
    firstNumber = displayValue;
  }

  displayValue = '';
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

function operate(operator, number1, number2) {
  let result;

  if (operator === '+') {
    result = add(number1, number2);
  } else if (operator === '-') {
    result = subtract(number1, number2);
  } else if (operator === '*') {
    result = multiply(number1, number2);
  } else {
    result = divide(number1, number2);
  }

  if (roundDecimals(result)) {
    result = roundDecimals(result);
  }
  
  display(result);
  return result;
}

function clearDisplay() {
  displayValue = '';
  display(displayValue);
}

function clearInputs() {
  operatorValue = undefined;
  firstNumber = undefined;
  secondNumber = undefined;
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