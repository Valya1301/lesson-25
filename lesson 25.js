
// Task 1

function divideNumbers(a, b) {
    return a / b;
}

  // Примеры использования функции
let result1 = divideNumbers(10, 2);
  console.log("10 / 2 =", result1); 

let result2 = divideNumbers(10, -2);
  console.log("10 / -2 =", result2); 

let result3 = divideNumbers(-10, 2);
  console.log("-10 / 2 =", result3); 

let result4 = divideNumbers(10, 0);
  console.log("10 / 0 =", result4); 


// Task 2


function squareNumber(x) {
    return x * x;
}

let number = 5;
let result = squareNumber(number);
console.log(result);

// Task 3

function sumArray(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

let array = [1, 2, 3, 4, 5];
let result7 = sumArray(array);
console.log(result7); 


// Task 4 


function getStringLength(str) {
    return str.length;
}


let exampleString = "Hello, world!"

let length = getStringLength(exampleString);
    console.log(length); 

// Task 5

function getAbsoluteValue(num) {
    return Math.abs(num);
}

let number1 = -7;
let result5 = getAbsoluteValue(number1);
    console.log(result5); 

// Task 6

function getStringLengths(strings) {
    return strings.map(str => str.length);
}


let stringsArray = ["hello", "world", "JavaScript", "is", "fun"];
let lengthsArray = getStringLengths(stringsArray);

    console.log(lengthsArray); 

// Task 7

function getMax(a, b) {
    return a > b ? a : b;
}  

    let number2 = 10;
    let number3 = 20;
    let max = getMax(number2, number3);
    console.log(max); 

// Task 8

function repeatString(str, times) {
    return str.repeat(times);
}

let string = "Hello";
let repeatCount = 5;
let result6 = repeatString(string, repeatCount);
  console.log(result6);

// Task 9


function doubleValues(numbers) {
    return numbers.map(num => num * 2);
}


let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
let doubledArray = doubleValues(numbersArray);
    console.log(doubledArray); 

// Task 10

function isEven(num) {
    return num % 2 === 0;
}

let number4 = 4;
let result8 = isEven(number4);
console.log(result8); 

number4 = 7;
result8 = isEven(number4);
console.log(result8); 





