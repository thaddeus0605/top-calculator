const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 === 0 ? 'Divide by zero error' : num1 / num2;

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let displayValue = "0";


const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value') || button.textContent;

        if (button.classList.contains('number') || button.classList.contains('number-zero') || button.classList.contains('number-dot')) {
            if (!currentOperator) {
                firstNumber += value;
                displayValue = firstNumber;
            } else {
                secondNumber += value;
                displayValue = secondNumber;
            }
        } else if (button.classList.contains('operator')) {
            if (firstNumber && secondNumber) {
                firstNumber = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
                secondNumber = "";
            }
            currentOperator = value;
            displayValue = currentOperator;
        } else if (button.classList.contains('equals')) {
            if (firstNumber && currentOperator && secondNumber) {
                displayValue = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
                firstNumber = displayValue;
                secondNumber = "";
                currentOperator = "";
            }
        } else if (button.classList.contains('operator-ac-btn')) {
            firstNumber = "";
            secondNumber = "";
            currentOperator = "";
            displayValue = "0";
        } else if (button.classList.contains('operator-backspace')) {
            if (currentOperator) {
                secondNumber = secondNumber.slice(0, -1);
                displayValue = secondNumber;
            } else {
                firstNumber = firstNumber.slice(0, -1);
                displayValue = firstNumber;
            }
        }

        display.textContent = displayValue;
    });
});




const operate = (operator, num1, num2) => {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = null;
    }
    return Math.round(result * 1000) / 1000;
};


