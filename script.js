function calculate(event) {
  const inputValue = event.target.value;
  const expression = /\+|\-|\*|\//;
  const numbers = inputValue.split(expression);
  const firstNum = +numbers[0];
  const secNum = +numbers[1];
  const operation = inputValue.match(expression);
  if (isNaN(firstNum) || isNaN(secNum) || operation == null) {
    updateResult("Operation not recognized");
    return;
  }
  const operator = operation[0];

  const calculater = new Calculator();
  calculater.add(firstNum);
  let result;

  switch (operator) {
    case "+":
      result = calculater.add(secNum);
      break;
    case "-":
      result = calculater.substract(secNum);
      break;
    case "*":
      result = calculater.multiply(secNum);
      break;
    case "/":
      result = calculater.divide(secNum);
      break;
  }
  updateResult(result);
}

function updateResult(finaleResult) {
  let element = document.getElementById("result");
  if (element) {
    element.innerText = finaleResult;
  }
}

document.getElementById(addEventListener("change", calculate));
