//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line

function timesFive(a) {
  return a * 5;

}
timesFive(5);
//Instructions
//Call the processArg function with an argument of 7 and assign its return value to the variable processed.
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);


function nextInLine(arr, item) {
  // Your code here

  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
