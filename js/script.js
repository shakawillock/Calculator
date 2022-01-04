const calculatorDisplay = document.querySelector('.calculator__display');
const numberBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const btnEquals = document.querySelector('.btn-equals');
const btnDecimal = document.querySelector('.btn-decimal');
const btnClear = document.querySelector('.btn-clear');

let displayValue = '';
let operatorValue;
let firstNumber;
let secondNumber;

numberBtns.forEach(number => {
    number.addEventListener('click', (e) => {
      displayValue += e.target.textContent;
      display(displayValue);
    });
});

operatorBtns.forEach(operator => {
  operator.addEventListener('click', getCalculatorInputs)
});

btnEquals.addEventListener('click', () => {
  secondNumber = displayValue;
  operate(operatorValue, Number(firstNumber), Number(secondNumber));
});

btnClear.addEventListener('click', () => {
  clearDisplay();
});

function display(value) {
  calculatorDisplay.textContent = value;
}

function getCalculatorInputs(e) {
  operatorValue = e.target.textContent;
  firstNumber = displayValue;
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
  if (operator === '+') {
    display(add(number1, number2))
  } else if (operator === '-') {
    display(subtract(number1, number2));
  } else if (operator === '*') {
    display(multiply(number1, number2));
  } else {
    display(divide(number1, number2));
  }
}

function clearDisplay() {
  displayValue = '';
  display(displayValue);
}
