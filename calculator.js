const figures = document.querySelectorAll('button');
const screen = document.querySelector('.screen');
const result = document.querySelector('.equalto')
const clear = document.querySelector('.clear');
const finalResult =  document.querySelector('.show-result');
let isCalculating = true;
function onScreen() {
    if(isCalculating){
        screen.textContent+=`${this.textContent}`; 
    } else{
        isCalculating = false;
}
    }
   

function showResult() {
    let array = Array.from(screen.textContent)
    array.pop()
   
    finalResult.textContent = `${eval(array.join(""))}`

    isCalculating = false;
}
function clearScreen() {
    screen.textContent = "";
    finalResult.textContent = "";
    isCalculating = true;
}

figures.forEach(operator => {
    operator.addEventListener('click', onScreen )
})
result.addEventListener('click', showResult)
clear.addEventListener('click', clearScreen)