const numbers = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operators button");
const equality = document.querySelector(".equality");
const clear = document.querySelector(".clear");
const screen = document.querySelector(".screen");
const inputs = document.querySelector(".inputs");
const result = document.querySelector(".result")
const resultbox = document.createElement("div");
const first = document.createElement("span");
const second = document.createElement("span");
const operator = document.createElement("span");

//add to screen
inputs.appendChild(first)
inputs.appendChild(operator)
inputs.appendChild(second)
result.appendChild(resultbox)

resultbox.classList.add("resultbox")

function Calculator() {
    this.resultarray = [];
    this.add = function add(a,b) {
        return a + b;
    }
    this.subtract = function subtract(a,b) {
        return a - b;
    }
    this.divide = function divide(a,b) {
        if(b === 0) console.error("You cannot divide by zero")
        else return (a / b).toFixed(2);
    }
    this.multiply = function multiply(a,b) {
        return (a * b).toFixed(4);
    }

    this.operate = function operate(operator,a,b) {
        if(operator === "+") this.resultarray.push(this.add(a,b));
        else if(operator === "-") this.resultarray.push(this.subtract(a,b));
        else if(operator === "*") this.resultarray.push(this.multiply(a,b));
        else if(operator === "/") this.resultarray.push(this.divide(a,b));
        return this.resultarray;
      }
    
}

let calculator = new Calculator();

function handleFirstOperandInput(e) {

/* if(inputs.children.length === 3) {
operand1.textContent += e.target.innerText;
} else {
    operand1 = operand1 || document.createElement("span");
    inputs.appendChild(operand1);
    operand1.textContent += e.target.innerText;
      
} */

if("firstOperand" in calculator) {
    calculator.firstOperand += e.target.textContent;
} else {
    calculator.firstOperand = e.target.textContent;
}
console.log(calculator.firstOperand);
first.textContent = calculator.firstOperand;
}

function handleOperatorInput(e) {
    if("operator" in calculator) {
        if(calculator.operator.length >= 1) {
            handleCalculation(-2);
        }
        calculator.operator.push(e.target.textContent);

    }
     else {
        calculator.operator = [];
        calculator.operator.push(e.target.textContent);
    }
    console.log(calculator.operator)
    operator.textContent = calculator.operator[calculator.operator.length -1];
}


function handleSecondOperandInput(e) {
  
      /*   operand2 = operand2 || document.createElement("span");
        inputs.appendChild(operand2);
        operand2.textContent += e.target.innerText; */
    if("secondOperand" in calculator) {
        calculator.secondOperand += e.target.textContent
    } else {
        calculator.secondOperand = e.target.textContent;
    }
    console.log(calculator.secondOperand);
    second.textContent = calculator.secondOperand;

}



function handleCalculation(e,n=1) {
/* let a = operand1;
let b = a.nextElementSibling;
let c = b.nextElementSibling;
result.textContent = operate(b.textContent,a.textContent,c.textContent);
a.textContent = result.textContent;
b.textContent = "";
c.textContent = "";
operatorCounter++; 
} */
//store first number
let firstOperand = Number(calculator.firstOperand);
console.log("first",firstOperand);

//store second number
let secondOperand = Number(calculator.secondOperand);
console.log("second",secondOperand);

//store operator
let operator = calculator.operator[calculator.operator.length-n];
console.log("operator",operator,n)

//calculate the result
let result = calculator.operate(operator,firstOperand,secondOperand);

//append the result to result div
//resultbox.textContent = result[result.length -1]

//store the result in the firstoperand property
calculator.firstOperand = result[result.length -1];
console.log(result);

//show the result
resultbox.textContent = calculator.firstOperand;

//show the first operand
first.textContent = calculator.firstOperand

//make the calculator secondoperand empty
calculator.secondOperand = "";

//show the second operand
second.textContent = calculator.secondOperand

}

//numbers eventlistners
numbers.forEach(number => {
    number.addEventListener("click",(e) => {
        if(calculator.operator) handleSecondOperandInput(e);
        else handleFirstOperandInput(e);
    });
})
//operators eventlisteners
operators.forEach(operator => {
    operator.addEventListener("click",handleOperatorInput)
})

//equality eventlisteners
equality.addEventListener("click",handleCalculation);

//clear button listeners
clear.addEventListener("click",() => {
    calculator = new Calculator();
    first.textContent = "";
    second.textContent = "";
    operator.textContent = "";
    resultbox.textContent = "";
})