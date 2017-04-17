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



// Day 6 Continuing Javascript codecamp
// Selecting from many options with Switch Statements
// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which defines various possible values. Statements are executed from the first matched case value until a break is encountered.
//
// Here is a pseudocode example:
//
// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   case valueN:
//     statementN;
//     break;
// }
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
//
// Instructions
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
    switch (val) {
     case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
       answer = "gamma";
        break;
      case 4:
        answer = "delta";

    }

  // Only change code above this line
  return answer;

}
// Change this value to test
caseInSwitch(1);

// Instructions
// Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "bird"
// "c" - "cat"
// default - "stuff"

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case "a":
      answer="apple";
    break;
    case "b":
      answer = "bird";
    break;
    case "c":
      answer = "cat";
    break;
    default:
      answer = "stuff";
  }


  // Only change code above this line
  return answer;
}


// Change this value to test
switchOfStuff(1);

// Instructions
// Write a switch statement to set answer for the following ranges:
// 1-3 - "Low"
// 4-6 - "Mid"
// 7-9 - "High"
//
// Note
// You will need to have a case statement for each number in the range.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
  case 1:
  case 2:
  case 3:
    answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
    answer = "High";

  }



  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);

// Instructions
// Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
    answer = "There is no #1";
      break;
    case 99:
    answer = "Missed me by this much!";
      break;
    case 7:
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

// Instructions
// Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
  // Fix this code
  return (a < b);


}

// Change these values to test
isLess(10, 15);
// Instructions
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
//
// Hint
// Remember that undefined is a keyword, not a string.

// Setup
function abTest(a, b) {
  // Only change code below this line
  console.log(a<0 || b<0);
    if (a< 0 || b < 0){
      return undefined;
    }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

// Counting Cards
// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
//
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
//
// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.
//
// Example Output
// "-3 Hold"
// "5 Bet"
//
// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
var count = 0;

function cc(card) {
  // Only change code below this line

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
     count = count +1;
     break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count = count -1;

  }
  if(count > 0){
    return count + " Bet";
  }
  return count + " Hold";

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');


// Instructions
// Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

// You can set these object properties to whatever values you want, as long "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
  "name": "Rolo",
  "legs": 4,
  "tails": 1,
  "friends": ["Me", "Nereus", "Jayden", "Jordan"]




};


// Instructions
// Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object property hat and set the variable shirtValue equal to the object property shirt.

// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

// Instructions
// Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

// Instructions
// Use the playerNumber variable to lookup player 16 in testObj using bracket notation.

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

// Instructions
// Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.name = "Happy Coder";

// Instructions
// Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.bark = "rarr";

// We can also delete properties from objects like this:

delete ourDog.bark;

// Instructions
// Delete the "tails" property from myDog. You may use either dot or bracket notation.
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

// Only change code below this line.

delete myDog.tails;

// Using Objects for Lookups
// Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
//
// Here is an example of a simple reverse alphabet lookup:
//
// var alpha = {
//   1:"Z",
//   2:"Y",
//   3:"X",
//   4:"W",
//   ...
//   24:"C",
//   25:"B",
//   26:"A"
// };
// alpha[2]; // "Y"
// alpha[24]; // "C"
//
// var value = 2;
// alpha[value]; // "Y"
// Instructions
// Convert the switch statement into a lookup table called lookup. Use it to lookup val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
     "alpha":
     "Adams",
    "bravo":
      "Boston",
    "charlie":
     "Chicago",
    "delta":
      "Denver",
    "echo":
       "Easy",
    "foxtrot":
     "Frank"
  };

  result = lookup[ val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");


// Day 12 100 Days of code! >>>>>
// Instructions
// Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
 if (myObj.hasOwnProperty(checkProp)){

    return myObj[checkProp];
}
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");

// Instructions
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "Rihanna",
    "title": "Unapologetic",
    "release_year": 2013,
    "formats": [
      "CD",
      "Vinel"
    ]
  }
];

// Instructions
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name.
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

// Instructions
// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

// Instructions
// Use a for loop to work to push the values 1 through 5 onto myArray.

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for(var i = 1; i < 6; i++) {
  myArray.push(i);
}

  // Instructions
// Push the odd numbers from 1 through 9 to myArray using a for loop.
// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 10; i += 2){
  myArray.push(i);
}

// Instructions
// Push the odd numbers from 9 through 1 to myArray using a for loop.
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Instructions
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for(var i = 0; i < myArr.length; i ++) {
  total += myArr[i];
}
