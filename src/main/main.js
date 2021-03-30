/*
Author: Jackson Joblinske,
Class: SE186X
Group: TheLads
*/

//question object that stores info about the question and answers generated
let Question = {
   question : "",
   answer1 : "",
   answer2 : "",
   answer3 : "",
   answer4 : "",
   correct : "",
};

//used to choose question
let i = 0;

//position of correct answer
let ANS;

//position clicked by user
let CHECK;




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



//generate a question from a bank of questions
function generateQuestion(){
  console.log("generating question...");

//generate a random number and set i = to it
  console.log("Generating random number...");
  let i = (Math.floor(Math.random() * questionBank.length));

//---------debug case for i
  console.log("number: " + (i + 1) + "/" + questionBank.length);

//set the question field in Question object
  Question.question = questionBank[i];

  //set the answers to their positions
  setAnswer(i);

  //update the screen to show questions and answers
   update();

   //----------debug case for question
   console.log(Question.question);

}

/*
@METHOD
@DESCRIPTION - sets the answers positions
@PARAM i = index of questions and answers
@PARAM - ANS = position of correct answer
*/
function setAnswer(i){

  console.log("Generating answers...");


//generate random number to decide where correct answer goes
  console.log("Generating random number...");
   ANS = Math.floor(Math.random() * 4);

//---------debug case for ANS
  console.log("number: " + (ANS + 1));
  //randomize which answer goes where and keep track of where it is

  switch(ANS){
    case 0:
      Question.answer1 = correctAns[i];
      Question.answer2 = answersOne[i];
      Question.answer3 = answersTwo[i];
      Question.answer4 = answersThree[i];
      Question.correct = correctAns[i];
      console.log("case : 0");
      break;
    case 1:
      Question.answer1 = answersOne[i];
      Question.answer2 = correctAns[i];
      Question.answer3 = answersTwo[i];
      Question.answer4 = answersThree[i];
      Question.correct = correctAns[i];
      console.log("case : 1");
      break;
    case 2:
      Question.answer1 = answersTwo[i];
      Question.answer2 = answersOne[i];
      Question.answer3 = correctAns[i];
      Question.answer4 = answersThree[i];
      Question.correct = correctAns[i];
      console.log("case : 2");
      break;
    case 3:
      Question.answer1 = answersThree[i];
      Question.answer2 = answersTwo[i];
      Question.answer3 = answersOne[i];
      Question.answer4 = correctAns[i];
      Question.correct = correctAns[i];
      console.log("case : 3");
      break;
    default:
      (console.log("ERROR"));
      break;
  }




  //return correct answer location
  return ANS;
}

function validateAnswer(ANS){

  CHECK = 0;
  //parameters: question number,score

  //check if answer location is = to correct location
  //yes -> add a point, next question
  //no -> next question
}
