var colour = "red";

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
