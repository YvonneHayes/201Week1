//Tuesday Lab Exercise


//Question1
var userName2 = prompt("What is your name?");
console.log("Welcome " + userName2 + " !");

//Question2
var userAge = prompt("How old are you?");
if (userAge < 30) {
  console.log("Oh, you little Whippersnapper!" + userAge + " is nothing!");
} else if (userAge <= 45) {
  console.log(userAge + " is a great age to be!");
} else {
  console.log("Wow! " + userAge + ", huh? With age comes wisdom, right? Right???");
}

//Question3
var userOrigin = prompt("Where are you from?");
console.log(userOrigin + " is a great place to be from!");

//Question4
var userAnimal = prompt("Do you prefer dogs or cats?");
if (userAnimal === 'cats'){
  console.log("Meow. So you like being treated like a slave. Nice. Enjoy your " + userAnimal + " !");
} else if (userAnimal === 'dogs') {
  console.log("Right on! " + userAnimal + " rule!");
} else {
  console.log("You had two choices, mate. Two!");
}

//Question5
var userDrink = prompt("Do you prefer wine or beer?");
if(userDrink === 'beer'){
  console.log("Great! If you like " + userDrink + " Portland is the right place for you!");
} else {
  console.log(userDrink + " sounds delicious!");
}

//Question6
var userTV = prompt("What's your favorite TV show?");
console.log("So you like " + userTV + ", huh? Can't argue taste, can you?");

//Question7

var userPortland = prompt("How many years have you lived in Portland?");
if (userPortland < 5) {
  console.log("Only " + userPortland + " years? You are still a newbie!");
} else {
  console.log("After " + userPortland + " years you are a true local. You should show me around!");
}

alert("Thank you for answering my questions! I'll be over soon at your place with some " + userDrink + " to watch some " + userTV + " !");
