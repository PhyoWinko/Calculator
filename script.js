// some basic calculator function
function add(a, b) {
    answer = a + b;
    console.log(answer);
}

function subtract(a, b) {
    answer = a - b;
    console.log(answer);
}

function multiply(a, b) {
    answer = a * b;
    console.log(answer);
}

function divide(a, b) {
    answer = a / b;
    console.log(answer);
}

let firstNumber;
let secondNumber;
let operator;


// operate funciton to call basic calculation function
function operate(operand1, operand2, operator) {
    if (operator === "+") {
        add(operand1, operand2);
    }
    if (operator === "-") {
        subtract(operand1, operand2);
    }
    if (operator === "*") {
        multiply(operand1, operand2);
    }
    if (operator === "/") {
        divide(operand1, operand2);
    }
}

const display = document.querySelector('.display');
// displayText variable to show on display 
let displayText = ""
display.textContent = displayText;
const buttonContainer = document.querySelector(".button-container");


function updateDisplay(text) {
    displayText = "" + String(text);
    console.log(`displaytext: ${displayText}`);
    display.textContent = displayText;
}

buttonContainer.addEventListener('click', function(event) {
    console.log(event.target.value);
    updateDisplay(event.target.value);
})


