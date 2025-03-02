// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Ma";
let lastName = "Comfort";
let country = "Cameroon";
let city = "Bamenda";
let age = "22";
let isMarried = "No";
let year = "2025";

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log(typeof "10" === 10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);

// Boolean value is either true or false.

// Write three JavaScript statements which provide truthy value.
let x = 5;
let y = 6;
let z = 7;

// Write three JavaScript statements which provide falsy value.
let d = 0;
let e = "";
let f = null;

//  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12
true;
console.log(4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12
false;
console.log(4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12
true;
console.log(4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12
true;
console.log(4 > 3 || 10 > 12);

// !(4 > 3)
false;
console.log(!(4 > 3));

// !(4 < 3)
true;
console.log(!(4 < 3));

// !(false)
true;
console.log(!false);

// !(4 > 3 && 10 < 12)
false;
console.log(!(4 > 3 && 10 < 12));

// !(4 > 3 && 10 > 12)
true;
console.log(!(4 > 3 && 10 > 12));

// !(4 === '4')
true;
console.log(!(4 === "4"));

//  Write a script that prompts the user to enter base and write another prompt for height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter the base of the triangle");
let height = prompt("Enter the height of the triangle");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

// Using prompt, get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years. It should be like:

// Enter birth year: 1995
let yourBirthYear = prompt("Enter your birth year");
let currentYear = 2025;
let yourAge = currentYear - yourBirthYear;
// You are 25. You are old enough to drive
if (yourAge >= 18) {
  console.log(`You are ${yourAge}. You are old enough to drive`);
}
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
else {
  console.log(
    `You are ${yourAge}. You will be allowed to drive after ${
      18 - yourAge
    } years.`
  );
}

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript’
let challenge = "30 Days Of JavaScript";

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using slice()
console.log(challenge.slice(0, 2));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

//  Declare variables named a & b, assign them to numbers. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
let a = 5;
let b = 6;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
// ternary operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//  Declare a variable named scores, Write a code which can give grades to students according to theirs scores and log it to the console:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let scores = 80;
if (scores >= 80 && scores <= 100) {
  console.log("A");
} else if (scores >= 70 && scores <= 89) {
  console.log("B");
} else if (scores >= 60 && scores <= 69) {
  console.log("C");
} else if (scores >= 50 && scores <= 59) {
  console.log("D");
} else {
  console.log("F");
}

// N.B When you have multiple prompts in one file, comment most of them and leave only the one you want to test uncommented.
