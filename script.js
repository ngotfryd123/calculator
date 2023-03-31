function add(num1,num2){
    let sum = num1+num2;
    return sum;}

function subtract(num1, num2){
    let difference= num1-num2;
    return difference;}

function multiply(num1,num2){
    let product= num1*num2;
    return product;}

function divide(num1,num2){
    let quotient= num1/num2;
    return quotient;}

function operate(num1,num2,operator){
        operator='+' ? add(num1,num2) 
        :operator='-' ? subtract(num1,num2)
        :operator='*' ? multiply(num1,num2)
        :divide(num1,num2);}

function getDisplay(buttonVal){
    if (buttonVal==="c"){
        displayVar="";
        buttonVal=displayVar;}
    displayVar+=buttonVal;
    return changeDisplay(displayVar);}

function changeDisplay(setDisplay){
    const display = document.querySelector('#display')
    display.innerHTML = setDisplay;}

const container = document.querySelector('#container');
container.style.background = "dark blue";
//listeners.addEventListener('click')

let num1=0;
let num2=0;
let operator;
let displayVar="";