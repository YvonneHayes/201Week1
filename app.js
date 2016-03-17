// //Wednesday Lab Exercise
//
// //Variable for Correct Answers Tally
//
// var correctAnswers = 0;
//
// //User Name
// var userName = prompt('Please tell me your name!');
// console.log('The user\'s name is ' + userName);
//
// //Welcome Message
// alert('Welcome, ' + userName + ' Let\'s play a game. I\'m going to ask you some questions about me. Please click "ok" and then we\'ll get started!');
//
// //First Question - Yes or No - will repeat if wrong input
// var keepAskingQ1 = true;
//
// while (keepAskingQ1){
// var userResponse1 = prompt('Am I a passionate cook who loves creating tasty treats for friends and family? Please answer Y or N.');
// console.log('userResponse1: ' + userResponse1);
// if (userResponse1.toLowerCase() === 'n' || userResponse1.toUpperCase() === 'NO') {
//   alert('You are correct. Cooking is not one of my many fantastic talents. Don\'t worry - we\'ll order in!');
//   correctAnswers += 1;
//   keepAskingQ1 = false;
// } else if (userResponse1.toUpperCase() === 'Y' || userResponse1.toLowerCase() === 'no') {
//   alert('Sorry, domestic Goddess I am not. No worries, we\'ll order a delicious Pizza if you come to my house.');
//   keepAskingQ1 = false;
// } else {
//   alert('Please enter either "y" or "n"!');
//   }
// }
//
//
// //Second Question - Yes or No - will repeat if wrong input
// var keepAskingQ2 = true;
//
// while (keepAskingQ2){
// var userResponse2 = prompt('Am I a punctual person? Please answer Y or N.');
// console.log('userResponse2: ' + userResponse2);
//
// if (userResponse2.toLowerCase() === 'n' || userResponse2.toLowerCase() === 'no') {
//   alert('Sorry, you are very wrong on this one. I am pathologically punctual - and usually early.');
//   keepAskingQ2 = false;
// } else if(userResponse2.toUpperCase() === 'Y' || userResponse2.toUpperCase() === 'YES') {
//   alert('You are right! It must be my germanic roots. I\'m usually at least 10 minutes early.');
//   keepAskingQ2 = false;
//   correctAnswers += 1;
// } else {
//   alert('Please enter either "y" or "n"!');
// }
// }
//
// //Third Question - Switch Statement - will repeat if wrong input
// var keepAskingQ3 = true;
//
// while (keepAskingQ3) {
// var userResponse3 = prompt('What was my first pet? A hamster, a bunny, a dog or a cat?');
// console.log('userResponse3: ' + userResponse3);
//
// var pets = userResponse3.toLowerCase();
//
// switch (pets) {
//   case 'hamster':
//     alert('Sorry, but no. A hamster was my second pet. My first pet was a bunny!');
//     keepAskingQ3 = false;
//     break;
//   case 'bunny':
//     alert('That\'s right! My first pet was a black bunny rabbit named Stupsi.');
//     keepAskingQ3 = false;
//     correctAnswers += 1;
//     break;
//   case 'dog':
//     alert('Oh, I wish! But no I had to wait many years until finally being able to get a dog. My first pet was a bunny!');
//     keepAskingQ3 = false;
//     break;
//   case 'cat':
//     alert('Sorry, but you got this one wrong. The cats are a very new addition to my life. My first pet was a bunny!');
//     keepAskingQ3 = false;
//     break;
//   default:
//     alert('Please pick out of the four choices: hamster, bunny, dog or cat!');
// }
// }
//
// //Fourth Question - uses numeric input and repeats until correct answer
// var keepAskingQ4 = true;
//
// while (keepAskingQ4) {
// var userResponse4 = prompt('How many countries have I live in? Take a guess!');
// console.log('userResponse4 ' + userResponse4);
//
// if (parseInt(userResponse4) === 4) {
//   alert('That\'s correct! Well done!');
//   keepAskingQ4 = false;
//   correctAnswers += 1;
// } else if (userResponse4 < 4) {
//   alert('Sorry ' + userResponse4 + ' is not correct. I have lived in more countries than that! Guess again!');
// } else {
//   alert('Sorry ' + userResponse4 + ' is not correct. I have not lived in that many countries! Guess again!');
// }
// }

//Fifth Question - uses numeric input and gives exactly 4 tries to get it right
var counter = 0;

while (counter < 4) {
  var userResponse5 = prompt('How many (human!) languages do I speak? Take a guess!');
  console.log('userResponse5 ' + userResponse5);

  if (parseInt(userResponse5) === 4 && !isNaN(userResponse5)) {
    alert('That\'s correct! I speak 4 languages more or less fluently.')
    correctAnswers += 1;
  } else if (userResponse5 < 4 && !isNaN(userResponse5)) {
    alert('Sorry ' + userResponse5 + ' is not correct. I speak more languages than that! Guess again!');
  } else if (userResponse5 > 4 && !isNaN(userResponse5)) {
    alert('Sorry ' + userResponse5 + ' is not correct. I do not speak that many languages! Guess again!');
  } else {
    alert('Are you sure you entered a number? Please try again!');
  }

  counter += 1;
}

// // Correct Answers Tally
//
// if (correctAnswers >= 3) {
//   alert('Congratulations ' + UserName +' ! You have got ' + correctAnswers + ' questions right. Very well done!');
// }else {
//   alert('You have got ' + correctAnswers + 'questions right, ' + UserName + ". We should get to know each other better.")
// }
