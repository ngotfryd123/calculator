let num1;
let num2;
let operator;
let displayVar="";

function setDisplay(value){
    const display = document.querySelector('#display');
    display.innerHTML=value;
    if (num1 !==undefined && num2 !== undefined)displayVar=value;}
    
function add(a,b){
    let sum = a+b;
    return setDisplay(sum);}

function subtract(a, b){
    let difference= a-b;
    return setDisplay(difference);}

function multiply(a,b){
    let product= a*b;
    return setDisplay(product);}

function divide(a,b){
    let quotient= a/b;
    if (b===0){return setDisplay("Nope.")}
    else return setDisplay(quotient);}

function getNum(buttonVal){
   
    if (buttonVal==="c"){
        displayVar="";
        buttonVal=displayVar;
        operator=undefined;
        num1=undefined;
        num2=num1;}
    
    if (!buttonVal.includes("+") && !buttonVal.includes("-") && !buttonVal.includes("*") && !buttonVal.includes("/") && !buttonVal.includes("=")){
        if (num1 === undefined && num2 === undefined){
            if (displayVar !== undefined && operator !== undefined){
                displayVar="";
                operator=displayVar;
                num1=undefined;
                num2=num1;}}}

    if (buttonVal.includes("+")||buttonVal.includes("-")||buttonVal.includes("*")||buttonVal.includes("/")||buttonVal.includes("=")){/*do nothing*/}

   else {
    displayVar+=buttonVal;
    setDisplay(displayVar);}
   
   if (buttonVal.includes("+")||buttonVal.includes("-")||buttonVal.includes("*")||buttonVal.includes("/")){

    if (num1 !== undefined && num2 === undefined){
        num2=parseInt(displayVar);
        let operator2=buttonVal;
        operate(num1,num2,operator);
        operator=operator2;
        num1=displayVar;
        num2=undefined;
        displayVar="";}

    else if (num1 !== undefined && num2 !== undefined){
        if (displayVar !==""){
        num1=parseInt(displayVar);
        displayVar="";
        operator=buttonVal;}}

    else{
    num1=parseInt(displayVar);
    displayVar="";
    operator=buttonVal;}}
    
   if (buttonVal==="="){
    num2=parseInt(displayVar);
    displayVar="";
    operate(num1,num2,operator);
    num1=undefined;
    num2=undefined;}}

function operate(a,b,c){
        c==='+' ? add(a,b) 
        :c==='-' ? subtract(a,b)
        :c==='*' ? multiply(a,b)
        :divide(a,b);}
    
const container = document.querySelector('#container');
container.style.background = "#1e1e24";