
// Task 1

function filterPositiveNumbers(numbers) {
    return numbers.filter(num => num > 0);
}

    let numbersArray = [-10, 5, 0, 7, -3];
    let positiveNumbers = filterPositiveNumbers(numbersArray);
    console.log(positiveNumbers); 

// Task 2

function reverseString(str) {
    return str.split('').reverse().join('');
}

let string = "hello";
let reversed = reverseString(string);
    console.log(reversed); 

// Task 3

function calculateAverage(numbers) {
    if (numbers.length === 0) {
return 0;
    }
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return sum / numbers.length;
}

let numbersArray1 = [1, 2, 3, 4, 5];
let average = calculateAverage(numbersArray1);
console.log(average);

// Task 4

function sortDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}


    let numbersArray2 = [5, 3, 8, 1, 4];
    let sortedArray = sortDescending(numbersArray2);
  console.log(sortedArray); 

// Task 5

function factorial(n) {
    if (n < 0) {
      return undefined; 
    }
    if (n === 0 || n === 1) {
    return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
}


    let number = 5;
    let result = factorial(number);
  console.log(result);

// Task 6

function getHighScoringStudents(students) {
    return students
    .filter(student => student.averageScore > 70)
    .map(student => student.name);
} 
    let studentsArray = [
    { name: "Alice", age: 20, averageScore: 85 },
    { name: "Alex", age: 22, averageScore: 65 },
    { name: "Charlie", age: 19, averageScore: 75 },
    { name: "David", age: 21, averageScore: 55 },
    { name: "Anastasia", age: 20, averageScore: 95 }
];

let highScoringStudents = getHighScoringStudents(studentsArray);
console.log(highScoringStudents); 





