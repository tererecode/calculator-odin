const calcDisplay = document.getElementById('display');
const clearBtn = document.getElementById('clear-btn');
const calculateBtn = document.getElementById('equals-btn');
const numBtns = document.querySelectorAll('.calc-btns-num');
const operatorBtns = document.querySelectorAll('.calc-btn-operator');

let userInput = '';
let calledOperator;
let previousInput;
let lastResult;

numBtns.forEach(num => num.addEventListener('click', populateDisplay))
operatorBtns.forEach(operator => operator.addEventListener('click', nextUserInput))
calculateBtn.addEventListener('click', calculate)
clearBtn.addEventListener('click', clearCalc)

function populateDisplay(event) {
    userInput += event.target.textContent
    calcDisplay.textContent = userInput
    console.log('User pressed ', event.target.textContent, 'userInput val ', userInput)
}

function nextUserInput(event) {
    if (calledOperator == undefined) {
        calledOperator = event.target.textContent;
        console.log('new operator is ', calledOperator, 'previous is', previousInput)
    }
    if (previousInput == undefined || previousInput == '') {
        previousInput = userInput
        userInput = ''
        console.log('operator is ', calledOperator, 'previous is', previousInput)
    }
}

function calculate() {
    lastResult = operate(calledOperator, Number(previousInput), Number(userInput))
    console.log('result is ', lastResult)
    calcDisplay.textContent = lastResult
    previousInput = lastResult
    userInput = ''
    calledOperator = undefined;

}

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    if (b === 0) {
        alert('Oops! don\'t break the universe!');
        clearCalc();
    } else {
        return a / b
    }

};

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b)
            break;
    }
}

function clearCalc() {
    userInput = '';
    calledOperator = undefined;
    previousInput = undefined;
    lastResult = undefined;
    calcDisplay.textContent = '0';

}