// //Thursday Lab Exercise
//
// //Variable for Correct Answers Tally
var correctAnswers = 0;

//User Name
var userName = prompt('Please tell me your name!');
console.log('The user\'s name is ' + userName);

//Welcome Message
alert('Welcome, ' + userName + ' Let\'s play a game. I\'m going to ask you some questions about me. Please click "ok" and then we\'ll get started!');


var questions = [  ["question1", "Question One: Am I a passionate cook who loves creating tasty treats for friends and family? Please answer Y or N.", "response1","N",questionFunctionA,"You are correct. Cooking is not one of my many fantastic talents. Don\'t worry - we\'ll order in!",incorrectFeedbackQuestion1],
["question2","Question Two:Am I a punctual person? Please answer Y or N.","response2","Y",questionFunctionC,"You are right! It must be my germanic roots. I\'m usually at least 10 minutes early.",incorrectFeebackQuestion2],
["question3", "Question Three: What was my first pet? A hamster, a bunny, a dog or a cat?", "response3","bunny",incorrectFeedbackQuestion3,"That's right! My first pet was a black bunny rabbit named Stupsi.",]];

// [question id html (0), question to prompt (1), repsonse id html (2), correct answer to questions (3), incorrect answer to question (4), correct feedback to user (5), incorrect feedback to user (6), question type** (7) ]
//question types defined: A - boolean (y/n, t/f, 0/1);  B -  , C while
//function askQuestions (questionId, question, responseId, response){


for (i=0; i<questions.length; i++  ){

    var printQuestion = document.getElementById(questions[i][0]);
    var askQuestion = questions[i][1];
    var printResponse = document.getElementById(questions[i][2]);
    var correctResponse = questions[i][3];
    var incorrectResponse = questions[i][4];
    var correctFeedback = questions[i][5];  //telling user they got it f
    var incorrectFeedback = questions[i][6];
    var questionType = questions[i][7];
    var wrongSyntaxFeedback = "Please input Y or N.";

    printQuestion.textContent = questions[i][1];


console.log(printResponse);

var keepAsking =true;

while (keepAsking){
    var questionPrompt = prompt(askQuestion);
      if(questionPrompt === correctResponse){
        printResponse.textContent=correctFeedback;
        correctAnswers += 1;
        keepAsking = false;
        break;
      } else if (questionPrompt === incorrectResponse()){
          printResponse.textContent=incorrectFeedback();
          keepAsking = false;
          break;
        }else {
        alert(wrongSyntaxFeedback);
        printResponse.textContent =wrongSyntaxFeedback;

        }
      }

      }


//for questions with incorrect response of yes
function questionFunctionA (){
    return "Y";
}


//for questions with incorrect response of no
function questionFunctionC (){
  return "N";
}

//for questions with incorrect response varied
function questionFunctionB (){
return ("hamster" || "dog" || "cat" );

}

//incorrect response for question 1
function incorrectFeedbackQuestion1 (){
return "Sorry, domestic Goddess I am not. No worries, we\'ll order a delicious Pizza if you come to my house.";
}

//incorrect response for question 2
function incorrectFeebackQuestion2() {
return "Sorry, you are very wrong on this one. I am pathologically punctual - and usually early.";
}


//incorrect response for question 3
function incorrectFeedbackQuestion3() {
    switch (questionPrompt) {
      case 'hamster':
        alert('Sorry, but no. A hamster was my second pet. My first pet was a bunny!');
        keepAskingQ3 = false;
        break;
      case 'dog':
        alert('Oh, I wish! But no I had to wait many years until finally being able to get a dog. My first pet was a bunny!');
        keepAskingQ3 = false;
        break;
      case 'cat':
        alert('Sorry, but you got this one wrong. The cats are a very new addition to my life. My first pet was a bunny!');
        keepAskingQ3 = false;
        break;
      default:
        alert('Please pick out of the four choices: hamster, bunny, dog or cat!');
}
}




//correctAnswers += 1;




//Fourth Question - uses numeric input and repeats until correct answer
var keepAskingQ4 = true;

while (keepAskingQ4) {
var userResponse4 = prompt('How many countries have I live in? Take a guess!');
console.log('userResponse4 ' + userResponse4);

if (parseInt(userResponse4) === 4) {
  var response4 = document.getElementById("response4");
  response4.textContent ='That\'s correct! Well done!';
  keepAskingQ4 = false;
  correctAnswers += 1;
} else if (userResponse4 < 4) {
  alert('Sorry ' + userResponse4 + ' is not correct. I have lived in more countries than that! Guess again!');
} else {
  alert('Sorry ' + userResponse4 + ' is not correct. I have not lived in that many countries! Guess again!');
}
}

//Fifth Question - uses numeric input and gives exactly 4 tries to get it right
var counter = 0;

while (counter < 4) {
  var userResponse5 = prompt('How many (human!) languages do I speak? Take a guess!');
  console.log('userResponse5 ' + userResponse5);

  if (parseInt(userResponse5) === 4 && !isNaN(userResponse5)) {
    var response5 = document.getElementById("response5");
    response5.textContent ='That\'s correct! I speak 4 languages more or less fluently.';
    correctAnswers += 1;
    counter = 4;
  } else if (userResponse5 < 4 && !isNaN(userResponse5)) {
    alert('Sorry ' + userResponse5 + ' is not correct. I speak more languages than that! Guess again!');
  } else if (userResponse5 > 4 && !isNaN(userResponse5)) {
    alert('Sorry ' + userResponse5 + ' is not correct. I do not speak that many languages! Guess again!');
  } else {
    alert('Are you sure you entered a number? Please try again!');
  }

  counter += 1;
}

/* Sixth Question -  takes multiple possible correct answers that are stored in an array and gives 3
opportunities to guess correctly*/

var counter2 = 0;

while (counter2 < 3){
  var userResponse6 = prompt('Guess a (human!) language (other than english) that I speak! You have 3 tries!');
  console.log('userResponse6 ' + userResponse6);
  var correctLanguages = ['german', 'french', 'spanish'];

  for (i = 0; i < correctLanguages.length; i++) {
    if (userResponse6 === correctLanguages[i]) {
      var response6=document.getElementById("response6");
      response6.textContent = 'Wow! You have guessed correct! I\'m impressed.';
      correctAnswers += 1;
      counter2 = 3;
      break;
    } else if (i === correctLanguages.length -1){
      alert('No, I unfortunately do not speak ' + userResponse6 + '.');
    }
  }
  counter2 += 1;
}


// Correct Answers Tally

if (correctAnswers >= 3) {
  alert('Congratulations ' + userName +' ! You have got ' + correctAnswers + ' out of 6 questions right. Very well done!');
}else {
  alert('You have got ' + correctAnswers + ' out of 6 questions right, ' + userName + ". We should get to know each other better.")
}
