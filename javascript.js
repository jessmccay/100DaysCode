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


// DAY 5 of 100 DAYS OF CODE Below this line
// Instructions
// Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.

  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

// Instructions
// Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

// Instructions
// Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
// Instructions
// Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

//Instructions
// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

//Instructions
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);
// Instructions
// Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

// Change this value to test
testLessOrEqual(10);

//Instructions
// Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {

      return "Yes";

  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

// Instructions
// Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";


  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

// Instructions
// Combine the if statements into a single if/else statement.
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

 else{
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

// Instructions
// Convert the logic to use else if statements.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);

  // Instructions
// Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  }
  else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

// Instructions
// Write chained if/else if statements to fulfill the following conditions:
//
// num < 5 - return "Tiny"
// num < 10 - return "Small"
// num < 15 - return "Medium"
// num < 20 - return "Large"
// num >= 20 - return "Huge"

function testSize(num) {
  // Only change code below this line

  if (num < 5){
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20)
    return "Huge";
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1){
    return "Hole-in-one!";
  }
  else if ( strokes <= par - 2){
    return "Eagle";
  } else if (strokes === par -1){
    return "Birdie";
  } else if ( strokes === par){
    return "Par";
  } else if (strokes === par + 1){
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else


  return "Go Home!";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

// Golf Code
// In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
//
// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
//
// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive.

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1){
    return "Hole-in-one!";
  }
  else if ( strokes <= par - 2){
    return "Eagle";
  } else if (strokes === par -1){
    return "Birdie";
  } else if ( strokes === par){
    return "Par";
  } else if (strokes === par + 1){
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else


  return "Go Home!";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
