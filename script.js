// some basic calculator function
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let secondNumber;
let currentOperator;
let result;

// operate funciton to call basic calculation function
function operate(operand1, operand2, operator) {
    switch(operator) {
        case "+":
            return add(operand1, operand2);
        case '-': 
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);    }
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

            currentOperator = value;

            if (!firstNumber) {
                console.log("operator button presssed!")
                firstNumber = displayinfo.displayText.slice(0, -1);
                console.log("first number", firstNumber);
                display.textContent = firstNumber;
                displayinfo.displayText = "";
                console.log("current operator", currentOperator);
            }

            // if already has firstNumber
            // get second second and then make first number again
            else {
                secondNumber = displayinfo.displayText.slice(0, -1);
                result = operate(firstNumber, secondNumber, currentOperator);
                display.textContent = result;
                firstNumber = result;
                displayinfo.displayText = "";

            }
        }

        if (type === "answer") {
            console.log("answer button pressed!");
            secondNumber = displayinfo.displayText.slice(0, -1);
            console.log("second number", secondNumber);

            result = operate(firstNumber, secondNumber, currentOperator);
            display.textContent = result;
            firstNumber = result;
            displayinfo.displayText = "";
        }

    })
})
