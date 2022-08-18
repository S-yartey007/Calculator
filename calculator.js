const figures = document.querySelectorAll('button');
const screen = document.querySelector('#screen');
const result = document.querySelector('.equalto')
const clear = document.querySelector('.clear');
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
   
            screen.textContent += `${eval(array.join(""))}`

       isCalculating = false;
}
function clearScreen() {
    screen.textContent = "";
    isCalculating = true;
}

figures.forEach(operator => {
    operator.addEventListener('click', onScreen )
})
result.addEventListener('click', showResult)
clear.addEventListener('click', clearScreen)