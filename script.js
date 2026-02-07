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
let currentOperator;
let result;

// operate funciton to call basic calculation function
function operate(operand1, operand2, operator) {
    switch(operator) {
        case "+":
            add(operand1, operand2);
            break;
        case '-': 
            subtract(operand1, operand2);
            break;
        case '*':
            multiply(operand1, operand2);
            break;
        case '/':
            divide(operand1, operand2);
            break; 
    }
}

const display = document.querySelector('.calculator-display');
// displayText variable to show on display 
let displayinfo = {displayText: ""};
console.log(`this is display Text ${displayinfo.displayText}`);
display.textContent = displayinfo.displayText;
// const buttonContainer = document.querySelector(".button-container");


function updateDisplay(text) {
    displayinfo.displayText += "" + String(text);
    console.log(`Updated displaytext: ${displayinfo.displayText}`);
    display.textContent = displayinfo.displayText;
}


const inputButtons = document.querySelectorAll('input');
console.log(inputButtons);
inputButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // this code suggested from copilot
        const value = event.target.value;
        const type = event.target.dataset.type;

        console.log("checking status click", value, type);
        console.log(event);
        // display the value
        updateDisplay(value);

        if (type === "operator") {
            console.log("operator button presssed!")
            firstNumber = display.textContent.slice(0, -1);
            console.log("first number", firstNumber);
            currentOperator = value;
        }

        if (type === "answer") {
            console.log("answer button pressed!");
            result = operate(firstNumber, secondNumber, event.target.value);
        }

    })
})
