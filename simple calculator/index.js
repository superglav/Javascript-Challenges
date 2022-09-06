let calculate = document.getElementById("sum-el")
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function addsome (){
    let result = num1 + num2
    calculate.textContent ="Sum: " + result
}

function subsome (){
    calculate.textContent = num1 - num2
}

function divsome (){
    calculate.textContent = num1 / num2
}

function mulsome (){
    calculate.textContent = num1 * num2
}