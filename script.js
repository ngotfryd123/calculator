let num1=0;
let num2=0;
let operator;
let displayVar="";

function opDisplay(value){
const display = document.querySelector('#display');
        display.innerHTML = value;}

function add(a,b){
    let sum = a+b;
    return opDisplay(sum);}

function subtract(a, b){
    let difference= a-b;
    return opDisplay(difference);}

function multiply(a,b){
    let product= a*b;
    return opDisplay(product);}

function divide(a,b){
    let quotient= a/b;
    return opDisplay(quotient);}

function getDisplay(buttonVal){
    if (buttonVal==="c"){
        displayVar="";
        buttonVal=displayVar;
        operator=displayVar;}

    if (buttonVal==="+" || buttonVal==="-" || buttonVal ==="/" || buttonVal ==="*"){
        operator=buttonVal;
        num1=parseInt(displayVar);}

    if (buttonVal==="="){
        if (displayVar.includes("-"))num2=parseInt(displayVar.split('-')[1]);
        else if (displayVar.includes("+"))num2=parseInt(displayVar.split('+')[1]);
        else if (displayVar.includes("*"))num2=parseInt(displayVar.split('*')[1]);
        else num2=parseInt(displayVar.split('/')[1]);}

    displayVar+=buttonVal;
    return changeDisplay(displayVar);}

function operate(a,b,c){
        c==='+' ? add(a,b) 
        :c==='-' ? subtract(a,b)
        :c==='*' ? multiply(a,b)
        :divide(a,b);}
    
function changeDisplay(setDisplay){
        const display = document.querySelector('#display');
        display.innerHTML = setDisplay;
        if (setDisplay.includes("="))operate(num1,num2,operator);}   

const container = document.querySelector('#container');
container.style.background = "dark blue";