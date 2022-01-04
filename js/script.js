const calculatorDisplay = document.querySelector('.calculator__display');
const numberBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const btnEquals = document.querySelector('.btn-equals');
const btnDecimal = document.querySelector('.btn-decimal');
const btnClear = document.querySelector('.btn-clear');
let displayValue = '';

numberBtns.forEach(number => {
    number.addEventListener('click', (e) => {
      displayValue += e.target.textContent;
      display();
    });
});

operatorBtns.forEach(operator => {
  operator.addEventListener('click', getCalculatorInputs)
});

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
    displayValue = add(number1, number2)
  } else if (operator === '-') {
    displayValue = subtract(number1, number2);
  } else if (operator === '*') {
    displayValue = multiply(number1, number2);
  } else {
    displayValue = divide(number1, number2);
  }
}

function display() {
  calculatorDisplay.textContent = displayValue;
}

function getCalculatorInputs(e) {
 let operatorValue = e.target.textContent;
 let firstNumber = displayValue;
 displayValue = '';
}
