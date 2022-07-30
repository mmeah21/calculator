//math operations

function add(first,second){
    return first+second;
}

function subtract(first,second){
    return first-second;
}

function multiply(first,second){
    return first*second;
}

function divide(first,second){
    if(second == 0){
      

        return "By Zero? Try again.";
    }
    return first/second;
}

//operate function take two numbers and an operator

function operate(first,second){
    return storedOperator(first,second);
}

// assign a variable for the display and input values

let input = [];
let storedValue = 0;
let firstValue = 0;
let storedOperator ="";

const output = document.querySelector('#output');
    output.innerHTML = input;

//set click event to all buttons trigger 

const numbers = document.querySelectorAll("button.digits");

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        input = input+button.id;
        storedValue = Number(input);
        console.log("input: "+input);
        display();
    });
});

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    console.log("clear");
    input = [];
    storedValue = 0;
    firstValue = 0;
    storedOperator ="";
    display();
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    let ifdecimal =input.toString();
    if(ifdecimal.includes(".")){
        console.log("display input"+input);
        console.log("display storedValue"+storedValue);
        return;
    }
    else{
    input = input+decimal.textContent;
    storedValue = Number(input);
    }
    display();
})

const back = document.querySelector("#delete");
back.addEventListener('click', () => {
    console.log("delete: "+input[input.length-1]);
    input = input.toString();
    input =input.substring(0,input.length -1);
    storedValue = Number(input);
    display();
});


const divideSign = document.querySelector("#divide");
    divideSign.addEventListener('click', () => {
        if(storedOperator!==""){
            firstValue = storedOperator(firstValue,storedValue);

            }
            else {
                firstValue = storedValue;
            }
        storedOperator = divide;
        input = firstValue;
        storedValue = input;
        
        display();
        input=[];
        console.log("stored operation is: "+storedOperator+"Stored input is: "+storedValue);
    });


const multiplySign = document.querySelector("#multiply");
    multiplySign.addEventListener('click', () => {
        if(storedOperator!==""){
            firstValue = storedOperator(firstValue,storedValue);
            }
            else {
                firstValue = storedValue;
            }
        storedOperator = multiply;
        input = firstValue;
         storedValue = input;
         display();
        input =[];
        console.log("stored operation is: "+storedOperator+"Stored input is: "+storedValue);
    });


const minusSign = document.querySelector("#minus");
    minusSign.addEventListener('click', () => {
        if(storedOperator!==""){
            firstValue = storedOperator(firstValue,storedValue);
            
            }
            else {
                firstValue = storedValue;
            }
        storedOperator = subtract;
        input = firstValue;
         storedValue = input;
         display();
        input=[];
        console.log("stored operation is: "+storedOperator+"Stored input is: "+storedValue);
        
    });


const plusSign = document.querySelector("#plus");
    plusSign.addEventListener('click', () => {
        if(storedOperator!==""){
            firstValue = storedOperator(firstValue,storedValue);
          
            }
            else {
                firstValue = storedValue;
            }
        storedOperator = add;
         input = firstValue;
         storedValue = Number(input);
         display();
        input=[];
        console.log("stored operation is: "+storedOperator+"Stored input is: "+firstValue);
    });


const equalSign = document.querySelector("#equals");
    equalSign.addEventListener('click', () => {
         //operate(storedValue,Number(input));
         console.log("stored value is :"+storedValue);
         console.log("input value is :"+input);
         console.log("result is :"+operate(firstValue,storedValue));
         input = [""+operate(firstValue,storedValue)];
         storedValue = Number(input);
         display();
         storedOperator ="";
    });


function display(){
    output.innerHTML = input;
    if (input == "By Zero? Try again."){
            input = [];
            storedValue = 0;
            firstValue = 0;
            storedOperator ="";
    }
    
}





