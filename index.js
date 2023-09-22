let num1 = +prompt("1st Number : ");
let num2 = +prompt("2nd Number : ");

document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;

let sum =document.getElementById("sum-el")

function add(){
    let total = num1 + num2 
    sum.textContent += total + " - "
}
function substract(){
    sum.textContent += num1 - num2 + " - "
}
function multiply(){
    sum.textContent += num1 * num2 + " - "
    
}
function divide(){
    sum.textContent += num1 /  num2 
}