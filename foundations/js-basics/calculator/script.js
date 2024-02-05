let operand1 = null;
let operand2 = null;
let operator = null;
let clearPressed = true;
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display-content");
const operators = document.querySelectorAll(".operator");
numbers.forEach((number) => number.addEventListener("click", () => {
    if (!operand1) {
        operand1 = number.textContent;
        display.textContent = operand1;
    } else if (!operator && clearPressed) {
        operand1 += number.textContent;
        display.textContent = operand1;
    } else if (!operand2 && operator) {
        operand2 = number.textContent;
        display.textContent = operand2;
    } else if (operator) {
        operand2 += number.textContent;
        display.textContent = operand2;
    }
}));
operators.forEach((operatorButton) => operatorButton.addEventListener("click", () => {
    if (operatorButton.classList.contains("clear")) {
        operand1 = null;
        operand2 = null;
        operator = null;
        display.textContent = 0;
        clearPressed = true;
    } else if (operatorButton.classList.contains("equals")) {
        if (!operand2 && operator) {
            operand2 = operand1;
        }
        operate();
    } else {
        if (operand2) {
            operate();
        }
        if (operatorButton.classList.contains("multiply")) {
            operator = "multiply";
        } else if (operatorButton.classList.contains("divide")) {
            operator = "divide";
        } else if (operatorButton.classList.contains("add")) {
            operator = "add";
        } else if (operatorButton.classList.contains("subtract")) {
            operator = "subtract";
        }
        clearPressed = false;
    }
}));
function operate() {
    if (operator === "multiply") {
        operand1 *= operand2;
    } else if (operator === "divide") {
        operand1 /= operand2;
    } else if (operator === "add") {
        operand1 = operand1 * 1 + operand2 * 1;
    } else {
        operand1 -= operand2;
    }
    operand1 = Math.floor(operand1 * 100) / 100.0;
    display.textContent = operand1;
    operator = null;
    operand2 = null;
}