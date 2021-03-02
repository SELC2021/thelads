let question;
let answer1;
let answer2;
let answer3;
let answer4;

question = "How would you print \"\Hello World\"?";
answer1 = "print (\"\Hello World\")";

setInterval(function update(){
  document.getElementById('question').innerHTML = question;
  document.getElementById('ans1').innerHTML = answer1;
  document.getElementById('ans2').innerHTML = answer2;
  document.getElementById('ans3').innerHTML = answer3;
  document.getElementById('ans4').innerHTML = answer4;
});



function generateQuestion(){
  //generate random number to choose question from bank

  //pick questions and aswers from questions.js arrays

  //initiate quiz variables with correspondinng data

  //display question and answers

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
