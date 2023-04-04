let num1=0;
let num2=0;
let operator;
let displayVar="";

function opDisplay(value){
const display = document.querySelector('#display');
        display.innerHTML = value;
        displayVar=value;}

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
    if (b===0){return opDisplay("Nope.")}
    else return opDisplay(quotient);}

function getDisplay(buttonVal){
    if (buttonVal==="c"){
        displayVar="";
        buttonVal=displayVar;
        operator=displayVar;}

    if (buttonVal==="+" || buttonVal==="-" || buttonVal ==="/" || buttonVal ==="*"){

        if (displayVar.includes("+")||displayVar.includes("-")||displayVar.includes("/")||displayVar.includes("*")){
            if (displayVar.includes("-"))num2=parseInt(displayVar.split('-')[1]);
            else if (displayVar.includes("+"))num2=parseInt(displayVar.split('+')[1]);
            else if (displayVar.includes("*"))num2=parseInt(displayVar.split('*')[1]);
            else num2=parseInt(displayVar.split('/')[1]);
            operate(num1,num2,operator)}

        operator=buttonVal;
        num1=parseInt(displayVar);}

    if (buttonVal==="="){
        if (displayVar.includes("-"))num2=parseInt(displayVar.split('-')[1]);
        else if (displayVar.includes("+"))num2=parseInt(displayVar.split('+')[1]);
        else if (displayVar.includes("*"))num2=parseInt(displayVar.split('*')[1]);
        else num2=parseInt(displayVar.split('/')[1]);
        operate(num1,num2,operator);
        num1=displayVar;} 

    displayVar+=buttonVal;
   
    return changeDisplay(buttonVal);}

function operate(a,b,c){
        c==='+' ? add(a,b) 
        :c==='-' ? subtract(a,b)
        :c==='*' ? multiply(a,b)
        :divide(a,b);}
    
function changeDisplay(setDisplay){
        const display = document.querySelector('#display');
        if (setDisplay==="+" || setDisplay==="-" || setDisplay ==="/" || setDisplay ==="*"||setDisplay==="="){}
        else display.innerHTML = setDisplay;} 

const container = document.querySelector('#container');
container.style.background = "#1e1e24";