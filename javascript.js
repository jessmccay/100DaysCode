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


// Day 13 >>
// Instructions
// Push the numbers 0 through 4 to myArray using a while loop.

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while(i<5) {
  myArray.push(i);
  i++;
}

// Day 14 >>
// Instructions
// Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++){
    for(var j =0; j < arr[i].length; j ++)
    product *= arr[i][j];
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

// Profile Lookup
// We have an array of objects representing different people in our contacts lists.
//
// A lookUpProfile function that takes firstName and a property (prop) as arguments has been pre-written for you.
//
// The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.
//
// If both are true, then return the "value" of that property.

// If firstName does not correspond to any contacts then return "No such contact"

// If prop does not correspond to any valid properties then return "No such property"
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  for (var i=0;i<contacts.length;i++) {
        if (contacts[i].firstName===firstName) {
            if (contacts[i][prop]) {
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
    }
  return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

// Instructions
// Change randomFraction to return a random number instead of returning 0.
function randomFraction() {

  // Only change code below this line.
  var ranNum = Math.random();
  return ranNum;

  // Only change code above this line.
}

// Instructions
// Use this technique to generate and return a random whole number between 0 and 9.
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

// Instructions
// Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() *(myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);


//Day 15 >>>>
// Sift through Text with Regular Expressions
// Regular expressions are used to find certain words or patterns inside of strings.
//
// For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi

// Let's break this down a bit:

// / is the start of the regular expression.

// the is the pattern we want to match.
//
// / is the end of the regular expression.
//
// g means global, which causes the pattern to return all matches in the string, not just the first one.
//
// i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.
//
// Instructions
// Select all the occurrences of the word and in testString.

// You can do this by replacing the . part of the regular expression with the word and.

// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;


// Only change code below this line.

var expression = /and/gi;  // Change this Line

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;

// Instructions
// Use the \d selector to select the number of numbers in the string, allowing for the possibility of one or more digit.
// Setup
var testString = "There are 3 cats but 4 dogs.";

// Only change code below this line.

var expression = /\d+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
// Instructions
// Use \s to select all the whitespace characters in the sentence string.
// Setup
var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
// var spaceCount = testString.match(expression).length;
// Invert Regular Expression Matches with JavaScript
// You can invert any match by using the uppercase version of the regular expression selector.

// For example, \s will match any whitespace, and \S will match anything that isn't whitespace.

// Instructions
// Use /\S/g to count the number of non-whitespace characters in testString.

// Setup
var testString = "How many non-space characters are there in this sentence?";

// Only change code below this line.

var expression = /\S/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;

// Before we dive into Object Oriented Programming, let's revisit JavaScript objects.

// Give your motorBike object a wheels, engines and seats attribute and set them to numbers.

var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {

  // Only change code below this line.
"wheels": 2,
  "engines": 1,
  "seats": 2
};

// You can think of a constructor as a description for the object it will create.

// Have your MotorBike constructor describe an object with wheels, engines and seats properties and set them to numbers.

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 2;
};

// Note that it is important to use the new keyword when calling a constructor. This is how Javascript knows to create a new object and that all the references to this inside the constructor should be referring to this new object.

// Now, once the myCar instance is created it can be used like any other object and can have its properties accessed and modified the same way you would usually. For example:

// myCar.turboType = "twin";

// Our myCar variable now has a property turboType with a value of "twin".

// In the editor, use the Car constructor to create a new instance and assign it to myCar.

// Then give myCar a nickname property with a string value.

// Run tests (ctrl + enter)
//
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var myCar = new Car();
 myCar.nickname = "Ellie";
// Now give it a try yourself! Alter the Car constructor to use parameters to assign values to the wheels, seats, and engines properties.

// Then call your new constructor with three number arguments and assign it to myCar to see it in action.

var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
// var myCar= new Car(3,2,4);
//
// Make Object Properties Private
// Objects have their own attributes, called properties, and their own functions, called methods.
//
// In the previous challenges, we used the this keyword to reference public properties of the current object.
//
// We can also create private properties and private methods, which aren't accessible from outside the object.
//
// To do this, we create the variable inside the constructor using the var keyword we're familiar with, instead of creating it as a property of this.
//
// This is useful for when we need to store information about an object but we want to control how it is used by outside code.
//
// For example, what if we want to store the speed our car is traveling at but we only want outside code to be able to modify it by accelerating or decelerating, so the speed changes in a controlled way?
//
// In the editor you can see an example of a Car constructor that implements this pattern.
//
// Now try it yourself! Modify the Bike constructor to have a private property called gear and two public methods called getGear and setGear to get and set that value.
var speed = 10;

 // these are public methods
 this.accelerate = function(change) {
   speed += change;
 };

 this.decelerate = function() {
   speed -= 5;
 };

 this.getSpeed = function() {
   return speed;
 };
};

var Bike = function() {

 // Only change code below this line.
 var gear;

 this.getGear = function() {
  return gear;
 };

 this.setGear = function(num) {
   gear = num;
 };
};

var myCar = new Car();

var myBike = new Bike();

// The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it. Note that it does not modify the original array.

// In our example the callback only uses the value of the array element (the val argument) but your callback can also include arguments for the index and array being acted on.
//
// Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.
var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(val){
return val + 3;
});

// Condense arrays with reduce
// The array method reduce is used to iterate through an array and condense it into one value.

// To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).
//
// The accumulator is like a total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through.
//
// reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.
//
// Here is an example of reduce being used to subtract all the values of an array:
//
// var singleVal = array.reduce(function(previousVal, currentVal) {
//   return previousVal - currentVal;
// }, 0);
// Use the reduce method to sum all the values in array and assign it to singleVal.

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(singleVal);

// Filter Arrays with filter
// The filter method is used to iterate through an array and filter out elements where a given condition is not true.
//
// filter is passed a callback function which takes the current value (we've called that val) as an argument.
//
// Any array element for which the callback returns true will be kept and elements that return false will be filtered out.
//
// The following code is an example of using filter to remove array elements that are equal to five:
//
// Note: We omit the second and third arguments since we only need the value
//
// array = array.filter(function(val) {
//   return val !== 5;
// });
// Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.
var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val) {
  return val < 6;
});
console.log(newArray);

// Sort Arrays with sort
// You can use the method sort to easily sort the values in an array alphabetically or numerically.
//
// Unlike the previous array methods we have been looking at, sort actually alters the array in place. However, it also returns this sorted array.
//
// sort can be passed a compare function as a callback. The compare function should return a negative number if a should be before b, a positive number if a should be after b, or 0 if they are equal.
//
// If no compare (callback) function is passed in, it will convert the values to strings and sort alphabetically.
//
// Here is an example of using sort with a compare function that will sort the elements from smallest to largest number:
//
// var array = [1, 12, 21, 2];
// array.sort(function(a, b) {
//   return a - b;
// });
// Use sort to sort array from largest to smallest.
//
// Further explanation on the .sort() method can be found here.

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b){
  return b - a;
});

// Use reverse to reverse the array variable and assign it to newArray.

var array = [1,2,3,4,5,6,7];
var newArray = [];

// Only change code below this line.

newArray = array.reverse();

// Use .concat() to concatenate concatMe onto the end of oldArray and assign it to newArray.

var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

// Only change code below this line.

newArray = oldArray.concat(concatMe);

// Here is an example of split being used to split a string at every s character:
//
// var array = string.split('s');
//
// Use split to create an array of words from string and assign it to array.
var string = "Split me into an array";
var array = [];

// Only change code below this line.

array = string.split(" ");

// Use the join method to create a string from joinMe with spaces in between each element and assign it to joinedString.
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

// Only change code below this line.

joinedString = joinMe.join(" ");

//Day 16 >>
//Algorithms !>>
// Reverse a String
// Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.
function reverseString(str) {
   array = str.split("");
  console.log(array);
   array.reverse();
  console.log(array);

  return array.join("");

}

reverseString("hello");

// Factorialize a Number
// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//this is the searched for solution
function factorialize(num) {
 if (num < 0)
        return -1;
  else if (num === 0)
      return 1;
  else {
      return (num * factorialize(num - 1));
  }


}

factorialize(5);

//Day 17 >>
//this is my solution

function factorialize(num) {
  //must declare var j before loop
var j = 1;
  for(i=1;i<=num;i++){
    j = j*i;
  }
  return j;
}


factorialize(5);

// Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
function palindrome(str) {
  // Good luck

  //this takes out all special characters
  var newStr = str.replace(/[\W_]/g,"");

//turn str into an array
  var splitStr = newStr.split("");
  //use array built in method reverse
  var reverseStr = splitStr.reverse();
  //turn back into a string
  var joinStr = reverseStr.join("");
  var smalStr = joinStr.toLowerCase();
  var lilStr = newStr.toLowerCase();

  if(smalStr === lilStr){
    return true;
  }

  else{
    return false;
  }
}



palindrome("eye");

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  //turn string into Array
  var newStr = str.split(" ");
  var max = 0;
  for(var i = 0; i< newStr.length; i ++){

    if(max < newStr[i].length){
      //set max to the longer of the two
      max = newStr[i].length;
    }
  }
  return max;

}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Day 18 >>
// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
  return str
        .toLowerCase()
        .split(' ')
        .map(function(strings) {
            return strings[0].toUpperCase() + strings.substr(1);
        })
        .join(' ');
}

titleCase("I'm a little tea pot");

// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  //we will store the largest numbers from our arrays here.
  var largestNumber = [0,0,0,0];
  //iterate through arrays
  for(var i=0; i< arr.length; i++){

    //iterate through indexes of each array
    for(var j=0; j< arr[i].length; j++){
      if (arr[i][j] > largestNumber[i]){

        //replace current with value of the current index of the current array
        largestNumber[i] = arr[i][j];
       }
    }
  }
  return largestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
          //start string index at the end and then go back according to the number of letters in the target
  return str.substring(str.length-target.length, str.length) == target;
}

confirmEnding("Bastian", "n");

// Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num > 0){
    return str.repeat(num);
  }
  else{
    return "";
  }
}

repeatStringNumTimes("abc", 3);


//Day 19 >>
// Truncate a string
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//
// Note that inserting the three dots to the end will add to the string length.
//
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
function truncateString(str, num) {
  var newStr = "";
  if(str.length > num){
    //check if num < = 3 so we always return at least one letter
    if (num <= 3){
      for(var i = 0; i< num; i++){
        newStr += str[i];
      }
   }
   // change num to make room for ...
  for(var j = 0; j < num-3; j++) {
      newStr += str[j];
    }
    return newStr += "...";
  }
  else {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// Day 20 >>
// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function chunkArrayInGroups(arr, size) {
//start with empty array to push to
  var result = [];
  //check array length to make sure we can splice it
    while (arr.length > size) {
      //send this part of the array into the result array
      result.push(arr.splice(0, size));
    }
    //push the remainding array(its own array) into result array
    if (arr.length){
      result.push(arr);
    }

    return result;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.
//
// The head means the beginning of the array, or the zeroth index.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function slasher(arr, howMany) {
  // it doesn't always pay to be first

  // just take out starting at the 0th index as many is 'howmany'
  arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2);

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
function mutation(arr) {
  var arr1 = arr[0];
  var arr2 = arr[1];


  //iterate through they entire element of the 2nd index of the array
    for(var i=0; i < arr2.length; i++){
      //lowercase to ensure not getting false negative comparing same letters
      var checkArr = arr1.toLowerCase().indexOf(arr2[i].toLowerCase());

      //if false (-1 is for false)
      if (checkArr === -1) {
        return false;
      }
    }
  return true;

}

mutation(["hello", "hey"]);

// day 21 >>
//I was first trying to take this approach>
// if(arr[i] !== false || arr[i] !== null || arr[i] !== 0 || arr.length === 0 || arr[i] === undefined || arr[i].isNaN() === true)
//After coming back the next day I realize I dont have to do all of this work!
// >>>>>>>>>>>>>> so >>>>>>>



// I still havent solved it >>
// what i have been trying >>>
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var trutheez = [];
  for(var i=0; i < arr.length; i++){
    arr.filter(function(arr[i] === null){
      return arr;
    })
               }



   if(arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "" && arr[i] !== undefined) {
     trutheez.push(arr[i]);
    else if( arr[i] )
   }


//     if(arr[i] === 0){
//       arr.slice(arr[i]);
//     }
//     else if(arr[i] === false){
//       arr.slice(arr[i]);
//     }
//     else if(isNaN(arr[i]) === true){
//       arr.slice(arr[i]);
//     }
//     else if(arr[i] === ""){
//       arr.slice(arr[i]);
//     }
//     else if(arr[i] === undefined){
//       arr.slice(arr[i]);
//     }
//     else if(arr[i] === null){
//       arr.slice(arr[i]);
//     }
//     if(arr[i] !== false || arr[i] !== null || arr[i] !== 0 || arr.length === 0 || arr[i] === undefined || arr[i].isNaN() === true)

//     trutheez.push(arr[i]);
//     console.log(trutheez);
  }
  return trutheez;
}

bouncer([7, "ate", NaN, false, 9]);

//Day 22 >>
// The problem is solved >>
// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);


}

bouncer([7, "ate", "", false, 9]);

// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  var temp = [];
for (var i = 1; i < arguments.length; i++) {
    temp.push(arguments[i]);
    arr = arguments[0].filter(function(value) {
        return ( value !== temp[i - 1]) ;
    });
}
  return arr;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Where do I belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
   arr.push(num);
    arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([40, 10, 60], 50);
