const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.opt');
const screen = document.querySelector('.screen');
const clearContent = document.querySelector('.clear');
const equalto = document.querySelector('.equalto');
const result = document.querySelector('.show-result');
let isCalculating = true;
let num1, num2, operator;

function add(num1,num2) {
 let result = num1 + num2;
 return Math.round(result);
}

function sub(num1,num2) {
let result = num1 - num2;
return Math.round(result);
}

function divide(num1,num2) {
let result = num1 / num2;
return Math.round(result);
}

function multiply(num1,num2) {
let result = num1 * num2;
return Math.round(result);
}


function populate() {
 if(isCalculating){
    screen.textContent += `${this.innerText}`;
 }
 
 
}
function clear() {
isCalculating = true;
 screen.textContent = " ";
}
function store() {
    num1 = parseInt(screen.textContent.slice(0,-1),10)
    operator = screen.textContent.slice(-1);
    console.log(num1, operator);
}
function operate() {
   
    let index = parseInt(screen.textContent.indexOf(operator),10);
    console.log("index:",index);
    num2 = parseInt(screen.textContent.slice(index+1));
    console.log("value:",num2);
    if(operator === '-') {
        result.textContent = `${sub(num1,num2)}`
    } else if (operator === '+') {
        result.textContent = `${add(num1,num2)}`
    } else if(operator === '/') {
        result.textContent = `${divide(num1,num2)}`
    } else if(operator === '*') {
        result.textContent = `${multiply(num1,num2)}`
    } else {
        console.log("Not applicable");
    }
    isCalculating = false;
 
}

numbers.forEach(number => number.addEventListener('click', populate));
operators.forEach(operator => operator.addEventListener('click', populate));
clearContent.addEventListener('click', clear);
operators.forEach(operator => operator.addEventListener('click', store));
equalto.addEventListener('click', operate);