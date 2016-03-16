//Wednesday Lab Exercise

//User Name
var userName = prompt('Please tell me your name!');
console.log('The user\'s name is ' + userName);

//Welcome Message
alert('Welcome, ' + userName + ' Let\'s play a game. I\'m going to ask you some questions about me. Please click "ok" and then we\'ll get started!');

//First Question - Yes or No
var userResponse1 = prompt('Am I a passionate cook who loves creating tasty treats for friends and family? Please answer Y or N.');
console.log('userResponse1: ' + userResponse1);

if (userResponse1.toLowerCase() === 'n' || userResponse1.toUpperCase() === 'NO') {
  alert('You are correct. Cooking is not one of my many fantastic talents. Don\'t worry - we\'ll order in!');
} else if (userResponse1.toUpperCase() === 'Y' || userResponse1.toLowerCase() === 'no') {
  alert('Sorry, domestic Goddess I am not. No worries, we\'ll order a delicious Pizza if you come to my house.');
} else {
  alert('Please enter either "y" or "n"!');
}

//Second Question - Yes or No
var userResponse2 = prompt('Am I a punctual person? Please answer Y or N.');
console.log('userResponse2: ' + userResponse2);

if (userResponse2.toLowerCase() === 'n' || userResponse2.toLowerCase() === 'no') {
  alert('Sorry, you are very wrong on this one. I am pathologically punctual - and usually early.');
} else if(userResponse2.toUpperCase() === 'Y' || userResponse2.toUpperCase() === 'YES') {
  alert('You are right! It must be my germanic roots. I\'m usually at least 10 minutes early.');
} else {
  alert('Please enter either "y" or "n"!');
}

//Third Question - Switch Statement
var userResponse3 = prompt('What was my first pet? A hamster, a bunny, a dog or a cat?');
console.log('userResponse3: ' + userResponse3);

var pets = userResponse3.toLowerCase();

switch (pets) {
  case 'hamster':
    alert('Sorry, but no. A hamster was my second pet.');
    break;
  case 'bunny':
    alert('That\'s right! My first pet was a black bunny rabbit named Stupsi.');
    break;
  case 'dog':
    alert('Oh, I wish! But no I had to wait many years until finally being able to get a dog.');
    break;
  case 'cat':
    alert('Sorry, but you got this one wrong. The cats are a very new addition to my life.');
    break;
  default:
    alert('Please pick out of the four choices: hamster, bunny, dog or cat!');
}
