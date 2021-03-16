

//Author: Jackson Joblinske,
//Class: SE186X
//Group: TheLads

//question object
let Question = {
   question : "",
   answer1 : "",
   answer2 : "",
   answer3 : "",
   answer4 : "",
   correct : "",
};


// Question.question = "test";
// Question.answer1 = "ans1";
// Question.answer2 = "ans2";
// Question.answer3 = "ans3";
// Question.answer4 = "ans4";
// Question.correct = "correct";

let i = 0;




//test case for buttons
// function testFunc(){
//
//   console.log("hello");
//
// }


//update the screen and display the new question and answers
function update(){
  setInterval(function(){
    document.getElementById('question').innerHTML = Question.question;
    document.getElementById('ans1').innerHTML = Question.answer1;
    document.getElementById('ans2').innerHTML = Question.answer2;
    document.getElementById('ans3').innerHTML = Question.answer3;
    document.getElementById('ans4').innerHTML =  Question.answer4;
    document.getElementById('result').innerHTML = Question.correct;
  });
}



//generate a question form a bank of questions
function generateQuestion(){
  console.log("generating question...");

  console.log("Generating random number...");
  let i = (Math.floor(Math.random() * questionBank.length));

  console.log("number: " + (i + 1) + "/" + questionBank.length);


  Question.question = questionBank[i];
  Question.answer1 = answersOne[i];
  Question.answer2 = answersTwo[i];
  Question.answer3 = answersThree[i];
  Question.answer4 = correctAns[i];


  correct = correctAns[i];
   update();
   console.log(question);
}

function setAnswer(){

  let ANS = Math.random(4);
  //randomize which answer goes where

  //track where the correct answer lands

  //return correct answer location

  return ANS;
}

function validateAnswer(num, score){

  let CHECK;
  //parameters: question number,score

  //check if answer location is = to correct location
  //yes -> add a point, next question
  //no -> next question
}
