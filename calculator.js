const addBtn = document.getElementById("add").addEventListener("click", handleAddClick);
const multiplyBtn = document
  .getElementById("multiply")
  .addEventListener("click", handleMultiplyClick);
const divideBtn = document
  .getElementById("divide")
  .addEventListener("click", handleDivideClick);
const subtractBtn = document
  .getElementById("subtract")
  .addEventListener("click", handleSubtractClick);


//Addition
function add(number1, number2) {
  return number1 + number2;
}
function handleAddClick() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = add(num1, num2);
  document.getElementById("calculation-result").textContent = result;
}

//Multiplication
function multiply(number1, number2) {
  return number1 * number2;
}
function handleMultiplyClick() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = multiply(num1, num2);
  document.getElementById("calculation-result").textContent = result;
}

//Division
function divide(number1, number2) {
    if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}
function handleDivideClick() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = divide(num1, num2);
  document.getElementById("calculation-result").textContent = result;
}

//Subtraction
function subtract(number1, number2) {
  return number1 - number2;
}
function handleSubtractClick() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = subtract(num1, num2);
  document.getElementById("calculation-result").textContent = result;
}