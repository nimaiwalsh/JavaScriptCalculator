let number = '';
let equation = '';
let equalClicked = false;
const calcDisplay = document.getElementById('number-display');
const equationDisplay = document.getElementById('equation-display');

function numberPress(num) {
    if (equalClicked) {
        number = '';
        equalClicked = false;
        equation  = '';
    } 
    //Test for digital limit
    if (number.length > 18) {
        number = 'Digital limit met';
        equation = 'Digital limit met';
    } else {
        number += num;
        equation += num;
    }
    calcDisplay.innerHTML = number;
    equationDisplay.innerHTML = equation;
}

function operatorPress(operator) {
    if (equalClicked) {
        equation = number;
        equalClicked = false;
    } 
    //Test for digital limit
    if (equation.length > 18) {
        equation = 'Digital limit met';
    } else {
        equation += operator;
    }
    //reset number and calcDisplay
    number = '';
    calcDisplay.innerHTML = operator;
    //Update the equation display
    equationDisplay.innerHTML = equation;
}

function equalsPress() {
    //Round to 2 decimal place if the answer contains decimals
    if (eval(equation) % 1 != 0) {
        number = eval(equation).toFixed(2);
    } else {
        number = eval(equation);
    }
    calcDisplay.innerHTML = number;      
    equalClicked = true;
}

//All Clear function
function AcPress() {
    number = '';
    equation = '';
    calcDisplay.innerHTML = '';
    equationDisplay.innerHTML = ''; 
}

//Clear last entry
function CePress() {
    let position = equation.lastIndexOf(number); //Index number or -1
    equation = equation.substring(0, position-1);
    equationDisplay.innerHTML = equation;
    number = '';
    calcDisplay.innerHTML = '';
}