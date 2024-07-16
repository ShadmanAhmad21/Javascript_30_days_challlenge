const { log } = require("console");

//Task 1
let a = 0;
if (a > 0) {
    console.log("Postitve");
}
else if (a == 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}

//Task 2
let age = 18;
if (age >= 18) {
    console.log("Eligible for voting");
}
else {
    console.log("Not eligible for voting");
}

//Task 3
let x = 5;
let y = 15;
let z = 10;
let max
if (x > y && x > z) {
    max = x
} else if (y > x && y > z) {
    max = y
} else {
    max = z
}
console.log(max);

//Task 4
const dayNumber = 4;
switch (dayNumber) {
    case 1:
        dayName = "Monday"
        break;

    case 2:
        dayName = "Tuesday"
        break;

    case 3:
        dayName = "Wednesday"
        break;

    case 4:
        dayName = "Thursday"
        break;

    case 5:
        dayName = "Friday"
        break;

    case 6:
        dayName = "Saturday"
        break;

    case 7:
        dayName = "Sunday"
        break;

    default:
        dayName = "Invalid! Day Number, Try between 1-7"
        break;
}
console.log(dayName)

//Task 5

const marks = 45;
let grade;
switch (true) {
    case (marks >= 90 && marks <= 100):
        grade = "A"
        break;
    case (marks >= 80 && marks < 90):
        grade = "B"
        break;
    case (marks >= 70 && marks < 80):
        grade = "C"
        break;
    case (marks >= 60 && marks < 70):
        grade = "D"
        break;
    case (marks >= 0 && marks < 60):
        grade = "F"
        break;

    default:
        console.log("Invalid Marks");
        break;
}
console.log(grade);

//Task 6
let num1 = 23;
num1%2==0 ? console.log("even"):console.log("Odd");

// Task Thala
const year = 2011
console.log((year % 100 == 0 ? (year % 400 == 0 ? "Leap Year" : "Not Leap Year") : (year % 4 == 0 ? "Leap Year" : "Not Leap Year")))