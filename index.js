/*var colour = "red";

if (colour == "red") {
  // If colour is red, then print below
  console.log("The colour is red");
} else if (colour == "green") {
  // Used to not conflict with else.
  // If colour is green, then print below
  console.log("The colour is green");
} else {
  // If colour does not apply to above, print below
  console.log("This is another colour");
}

var int1 = 100;
var int2 = 100;

if (int1 != int2) {
  // If both variables are not equal, then print below
  console.log(int1 + " does not equal " + int2);
} else if (int1 == int2) {
  // If both variables are equal, then print below
  console.log(int1 + " equals " + int2);
}
if (int1 > int2) {
  // if int1 is greather than int1, then print below
  console.log(int1 + " is greather than " + int2);
} else if (int1 < int2) {
  // if int1 is less than int2, then print below
  console.log(int1 + " is less than " + int2);
}

console.log("24" != 24); //  explain why its false, as javascript convert all data types to integers to match eachother, statement asks whether it doesnt match eachother, they do so its false. 

const a = { isHavingFun: true };
const b = a;
console.log(a === b);
console.log(a == b);

var item = "";
console.log(item);


var person = "Joe";
switch (person) {
  case "Jane":
    console.log("Hi Jane");
    break;
  case "John":
    console.log("Hi John");
    break;
  case "Joe":
    console.log("Hi Joe");
    break;
  case "Mary":
    console.log("Hi Mary");
    break;
  default:
    console.log("Hi");
    break;
}

var person = "Joe";
switch (person) {
  case "Jane":
    console.log("Hi Jane");
    break;
  case "John":
    console.log("Hi John");
    break;
  default:
    console.log("Hi");
    break;
  case "Joe":
    console.log("Hi Joe");
    break;
  case "Mary":
    console.log("Hi Mary");
    break;
}

const foo = 1;
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("I like this number");
    break;
  case -1:
  case -2:
    console.log("I love this number");
    break;
    default:
      console.log("I don't like this number.");
}
*/
/*
const foo = 1;
let output = "";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "How ";
    output += "Old ";
  case 2:
    output += "Are ";
  case 3:
    output += "You";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
*/
const year = 2001;
switch (year) {
  case 1999:
    console.log("Your age is 20");
    break;
  case 2000:
    console.log("Your age is 19");
    break;
  case 2001:
    console.log("Your age is 18");
    break;
  case 2002:
    console.log("Your age is 17");
    break;
  case 2003:
    console.log("Your age is 16");
    break;
  case 2004:
    console.log("Your age is 15");
    break;
  case 2005:
    console.log("Your age is 14");
    break;
  default:
    console.log("Please choose a year between 2000 and 2005");
}
