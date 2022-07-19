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

}

//operate function take two numbers and an operator

function operate(operator,first,second){
    return operator(first,second);
}

// assign a variable for the display and input values

let input = [0];
let storedValue = 0;

const output = document.querySelector('#output');
    output.innerHTML = input;

//set click event to all buttons trigger 

const numbers = document.querySelectorAll("button.digits");

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        input = input+button.id;
        console.log("input: "+input);
        display();
    });
});

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    console.log("clear");
    input = 0;
    display();
});


const back = document.querySelector("#delete");
back.addEventListener('click', () => {
    console.log("delete: "+input[input.length-1]);
    input =input.substring(0,input.length -1);
    display();
});


function display(){
    output.innerHTML = input;
}





