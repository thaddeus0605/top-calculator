const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2; 
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    if (y === 0) {
        return 'Divid by zero';
    } 
    return num1 / num2;
};

let number1 = 0;
let number2 = 0;
let operators = "";
let result = 0; 

const operate = (num1, num2, operator) => {
    if (operator === "+") {
        result = add(num1, num2)
    } else if (operator === "-") {
       result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2)
    } else if (operator === "/") {
        result = divide(num1, num2)
    }

    return result;
}
