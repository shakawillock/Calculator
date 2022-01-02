const btnNumbers = document.querySelectorAll('.btn-number');
const calculatorDisplay = document.querySelector('.calculator__display');

btnNumbers.forEach(number => {
  number.addEventListener('click', changeCalculatorDisplay);
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
  return operator(number1, number2);
}

function changeCalculatorDisplay(e) {
  calculatorDisplay.textContent += e.currentTarget.textContent;
}

function getCalculatorInput(e) {
   let displayValue = e.currentTarget.textContent;
   console.log(displayValue)
}